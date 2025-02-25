require("dotenv").config();

import Provider from "../../src";

jest.setTimeout(20000);

describe("Provider", () => {
  let provider: Provider;

  beforeAll(() => {
    provider = new Provider({
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
    expect(utxos).toBeTruthy();
  });
});
