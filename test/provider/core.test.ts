require("dotenv").config();

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

  test("Provider should fetch alias index utxos", async () => {
    const utxos = await provider.core.aliasIndex.getUtxos();
    console.log("number of alias index utxos", utxos.length);
    expect(utxos).toBeTruthy();
  });

  test("Provider should fetch global state utxos", async () => {
    const utxos = await provider.core.globalState.getUtxos();
    console.log("number of global state utxos", utxos.length);
    expect(utxos).toBeTruthy();
  });

  test("Provider should fetch governance utxos", async () => {
    const utxos = await provider.core.governance.getUtxos();
    console.log("number of governance utxos", utxos.length);
    expect(utxos).toBeTruthy();
  });

  test("Provider should fetch instance utxos", async () => {
    const utxos = await provider.core.instance.getUtxos();
    console.log("number of instance utxos", utxos.length);
    expect(utxos).toBeTruthy();
  });
});
