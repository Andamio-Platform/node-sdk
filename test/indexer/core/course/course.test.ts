import { Course } from "../../../../src";

jest.setTimeout(20000);

describe("Course", () => {
  test("Course Utxos query test", async () => {
    const course = new Course("95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8");
    const utxos = await course.getUtxos();
    expect(Array.isArray(utxos)).toBe(true);
    expect(utxos.length).toBeGreaterThan(0);
  });
});
