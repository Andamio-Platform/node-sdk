import { GlobalState } from "../../../src";

describe("GlobalState", () => {
  test("GlobalState Utxos query test", async () => {
    const globalState = new GlobalState();
    const utxos = await globalState.getUtxos();
    expect(Array.isArray(utxos)).toBe(true);
    expect(utxos.length).toBeGreaterThan(0);
  });
});
