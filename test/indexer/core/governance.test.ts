import { Governance } from "../../../src";

describe("Governance", () => {
    test("Governance Utxos query test", async () => {
        const governance = new Governance();
        const utxos = await governance.getUtxos();
        expect(Array.isArray(utxos)).toBe(true);
        expect(utxos.length).toBeGreaterThan(0);
    });
});