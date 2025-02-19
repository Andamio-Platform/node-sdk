import { cardano } from "@utxorpc/spec";
import { Instance, plutusData } from "../src";
import { bytesToHex } from "@meshsdk/common";

jest.setTimeout(20000);

describe("Instance", () => {
  test("Instance Utxos query test", async () => {
    const instance = new Instance();
    const utxos = await instance.getUtxos();
    // console.log(JSON.stringify(utxos[0], null, 2));
    // console.log(utxos[0].parsedValued!.datum!.payload!.plutusData.value!);
    // console.log(JSON.stringify(utxos[0].parsedValued!.datum!.payload!, null, 2));
    console.log(plutusData(utxos[0].parsedValued!.datum!.payload!));
    console.log(bytesToHex(utxos[0].parsedValued!.assets![0].assets![0].name));
    expect(utxos[0].parsedValued!.datum!.payload!).toBeInstanceOf(cardano.PlutusData);
    expect(Array.isArray(utxos)).toBe(true);
    expect(utxos.length).toBeGreaterThan(0);
  });
});

