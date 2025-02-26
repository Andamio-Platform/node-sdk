require("dotenv").config();

import { bytesToHex } from "@meshsdk/common";
import { AndamioProvider } from "../../src";

jest.setTimeout(20000);

describe("Provider", () => {
  let provider: AndamioProvider;

  beforeAll(() => {
    provider = new AndamioProvider({
      baseUrl: process.env.BASE_URL
        ? process.env.BASE_URL
        : "http://localhost:50051",
      dmtr_api_key: process.env.DMTR_API_KEY,
      redisUrl: process.env.REDIS_URL,
    });
  });

  test("Provider should fetch course utxos", async () => {
    const utxos = await provider.core.course.course.getUtxos(
      "95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8",
    );
    console.log("number of course utxos", utxos.length);
    console.log(bytesToHex(utxos[0].txoRef.hash))
    console.log(JSON.stringify(utxos[0].parsedValued.datum, null, 2));
    const result = processInputJSON(JSON.stringify(utxos[0].parsedValued.datum.payload));
console.log(result);
    expect(utxos).toBeTruthy();
  });
});



/**
 * Transforms the input object to the desired output format
 */
function transformObject(input: any): any {
  // Base case: if input is not an object or is null, return it as is
  if (typeof input !== 'object' || input === null) {
    return input;
  }

  // Handle arrays
  if (Array.isArray(input)) {
    return input.map(item => transformObject(item));
  }

  // Handle constructor objects
  if (input.constr) {
    const result: any = {
      constructor: parseInt(input.constr.anyConstructor, 10),
      fields: transformObject(input.constr.fields)
    };
    return result;
  }

  // Handle boundedBytes (base64 encoded)
  if (input.boundedBytes) {
    return { bytes: Buffer.from(input.boundedBytes, 'base64').toString('hex') };
  }

  // Handle array objects
  if (input.array && input.array.items) {
    return transformObject(input.array.items);
  }

  // Handle objects with multiple keys by transforming each property
  const result: any = {};
  for (const key in input) {
    result[key] = transformObject(input[key]);
  }
  return result;
}

/**
 * Main function to process the input JSON
 */
function processInputJSON(jsonString: string): string {
  try {
    const inputObject = JSON.parse(jsonString);
    const transformedObject = transformObject(inputObject);
    return JSON.stringify(transformedObject, null, 3);
  } catch (error) {
    return `Error processing JSON: ${error}`;
  }
}