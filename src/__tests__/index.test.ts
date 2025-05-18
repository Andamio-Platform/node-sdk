// src/__tests__/index.test.ts
import { AndamioSDK } from '../index';
import { syncBlocks } from '../utils/db/sync-blocks';
import { syncInstanceAddresses } from '../utils/db/sync-instance-addresses';
import { readTip } from '../utils/u5c/read-tip';
import { searchInstanceTx } from '../utils/u5c/dump-instance-blocks';
import { syncTxs } from '../utils/db/sync-txs';

jest.setTimeout(500000000);

describe('AndamioSDK', () => {
  let sdk: AndamioSDK;

  beforeEach(() => {
    sdk = new AndamioSDK("https://preprod.utxorpc-v0.demeter.run:443", "Preprod", "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353");
  });

  describe('get utxos', () => {
    it('fetch network utxos from grpc', async () => {

      // const blocks = await syncBlocks();
      // const sync = await syncInstanceAddresses();
      const sync = await syncTxs();
      // const tip = await searchInstanceTx();
      // const tip = await readTip();


      // const projects = (await sdk.provider.network.getAllInstancesList()).projects;
      // console.log("projects : ", JSON.stringify(projects, null, 4))

      // for (const project of projects) {
      //   try {
      // const txs = await sdk.provider.network.treasuryTxs("caffc76e84584da3f7be51e72a271b159e62f5ee0cece5c1c0c061f6")

      // console.log("txs : ", JSON.stringify(txs, null, 4))
      //   } catch (error) {
      //     continue;
      //   }
      // }

      // const tx = await sdk.transaction.mintAccessToken({ userAddress: "addr_test1qzx4yysnpp9t2692g08gdmvykl22w4fyfqyp2clzrqrx5tdk88srfmghu2rk9nh87744pdaew9x9tz80mqz0pszlhvrs6zlvrg", alias: "hanuman" });
      // console.log("tx cbor : ", JSON.stringify(tx, null, 4))
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