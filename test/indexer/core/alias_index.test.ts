import { AliasIndex } from "../../../src";

describe("AliasIndex", () => {
  test("AliasIndex Utxos query test", async () => {
    const aliasIndex = new AliasIndex();
    const utxos = await aliasIndex.getUtxos();
    expect(Array.isArray(utxos)).toBe(true);
    expect(utxos.length).toBeGreaterThan(0);
  });
});
