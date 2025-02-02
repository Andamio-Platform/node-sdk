require('dotenv').config();  // Load environment variables from .env file

import { UtxorpcClient } from "../src/client";
import { CardanoQueryClient } from "@utxorpc/sdk";
import { SdkError } from "../src/errors";  // Adjust the import path if needed
import { logger } from "../src/utils/logger";  // Adjust the import path if needed

jest.setTimeout(10000);  // Increase timeout in case of slower network responses

describe("UtxorpcClient", () => {
  let client: UtxorpcClient;

  beforeEach(() => {
    client = new UtxorpcClient(
      "https://preprod.utxorpc-v0.demeter.run:443",
      process.env.DMTR_API_KEY
    );
  });

  test("Client should fetch network params", async () => {
    try {
      const params = await client.getParams(); // Fetch network parameters
      expect(params).toHaveProperty("governanceActionDeposit");
    } catch (error) {
      expect(error).toBeInstanceOf(SdkError);
      if (error instanceof SdkError) {
        expect(error.message).toBe("Failed to fetch network params.");
      }
    }
  });

  test("Client should fetch utxos", async () => {
    try {
      const uxtos = await client.getUtxos();
      expect(uxtos.length).toBeGreaterThan(1);
    } catch (error) {
      expect(error).toBeInstanceOf(SdkError);
      if (error instanceof SdkError) {
        expect(error.message).toBe("Failed to fetch utxos.");
      }
    }
  });
});
