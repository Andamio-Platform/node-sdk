// src/__tests__/index.test.ts
import { AndamioSDK } from '../index';

jest.setTimeout(50000);

describe('AndamioSDK', () => {
  let sdk: AndamioSDK;

  beforeEach(() => {
    sdk = new AndamioSDK("https://preprod.utxorpc-v0.demeter.run:443", "Preprod", "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353");
  });

  describe('get utxos', () => {
    it('fetch network utxos from grpc', async () => {
      const tx = await sdk.transaction.mintAccessToken({ userAddress: "addr_test1qzx4yysnpp9t2692g08gdmvykl22w4fyfqyp2clzrqrx5tdk88srfmghu2rk9nh87744pdaew9x9tz80mqz0pszlhvrs6zlvrg", alias: "hanuman" });
      console.log("tx cbor : ", JSON.stringify(tx, null, 4))
      // expect((await sdk.provider.core.network.aliasIndex.getUtxos())).toBeTruthy();
      // expect((await sdk.provider.core.network.globalState.getUtxos())).toBeTruthy();
      // expect((await sdk.provider.core.network.governance.getUtxos())).toBeTruthy();
      // expect((await sdk.provider.core.network.instance.getUtxos())).toBeTruthy();
    });

    // it('fetch course utxos from grpc', async () => {
    //   expect((await sdk.provider.core.course.courseState.getUtxos("95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8"))).toBeTruthy();
    //   expect((await sdk.provider.core.course.assignmentState.getUtxos("95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8"))).toBeTruthy();
    //   expect((await sdk.provider.core.course.moduleRef.getUtxos("95151ed73bbae6f4b992731e09a4b3c6a7fac0368649caad8a166fc8"))).toBeTruthy();
    // });

    // it('fetch project utxos from grpc', async () => {
    //   expect((await sdk.provider.core.project.contributorState.getUtxos("5f40046e0c6a7c06425c66606b0d31fb89eba6402c33a97e411667bc"))).toBeTruthy();
    //   expect((await sdk.provider.core.project.escrow.getUtxos("5f40046e0c6a7c06425c66606b0d31fb89eba6402c33a97e411667bc"))).toBeTruthy();
    //   expect((await sdk.provider.core.project.treasury.getUtxos("5f40046e0c6a7c06425c66606b0d31fb89eba6402c33a97e411667bc"))).toBeTruthy();
    // });
  });
});