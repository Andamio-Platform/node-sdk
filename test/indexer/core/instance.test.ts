import { Instance } from "../../../src";

jest.setTimeout(20000);

describe("Instance", () => {
  test("Instance Utxos query test", async () => {
    const instance = new Instance();
    const utxos = await instance.getUtxos();
    expect(Array.isArray(utxos)).toBe(true);
    expect(utxos.length).toBeGreaterThan(0);
  });
});
