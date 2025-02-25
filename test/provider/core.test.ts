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

  test("Provider should fetch alias index utxos", async () => {
    const utxos = await provider.core.aliasIndex.getUtxos();
    expect(utxos).toBeTruthy();
  });

  test("Provider should fetch global state utxos", async () => {
    const utxos = await provider.core.globalState.getUtxos();
    expect(utxos).toBeTruthy();
  });

  test("Provider should fetch governance utxos", async () => {
    const utxos = await provider.core.governance.getUtxos();
    expect(utxos).toBeTruthy();
  });

  test("Provider should fetch instance utxos", async () => {
    const utxos = await provider.core.instance.getUtxos();
    expect(utxos).toBeTruthy();
  });
});
