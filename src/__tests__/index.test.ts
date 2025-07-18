// src/__tests__/index.test.ts
import { AndamioSDK } from '../index';

jest.setTimeout(500000);

describe('AndamioSDK', () => {
  let sdk: AndamioSDK;

  beforeEach(() => {
    sdk = new AndamioSDK("https://preprod.utxorpc-v0.demeter.run:443", "Preprod", "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353");
  });

  describe('overview endpoints', () => {
    it('test', async () => {
      // const overview = await sdk.provider.overview.getAllAliases();
      // console.log("overview: ", JSON.stringify(overview, null, 4));
      // expect(overview).toBeTruthy();

      // const enrollee = await sdk.provider.overview.stats.getEnrolleeCount([
      //   'cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd',
      //   '56fccd878c2b536b52533343a54f7f4365dfb31bf2395677c441c386',
      //   '19b37c7b723ab2758481f88f36213256a0e387e537d70ad2acb745d8'
      // ])
      // console.log("enrollee count: ", JSON.stringify(enrollee, null, 4));

      // const commitments = await sdk.provider.overview.stats.getCommitmentsCount([
      //   'cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd',
      //   '56fccd878c2b536b52533343a54f7f4365dfb31bf2395677c441c386',
      //   '19b37c7b723ab2758481f88f36213256a0e387e537d70ad2acb745d8'
      // ])
      // console.log("commitments count: ", JSON.stringify(commitments, null, 4));

      const commitmentsUnderAlias = await sdk.provider.overview.stats.getCommitmentsCountUnderAlias("manager-001")
      console.log("commitments count under alias: ", JSON.stringify(commitmentsUnderAlias, null, 4));
    });
  })

  describe('core endpoints', () => {
    it('fetch network utxos from grpc', async () => {
      // const tx = await sdk.transaction.sponsorMintAccessToken({ userAddress: "addr_test1qrd8h489r5d6tft7h765kxcx9pwrjsg2luq7dutjzgg56khct2wh5xzek2krylzk7kf78zpps92ucr8j0narvwcsnupqrmzjy3", alias: "sponsorshipTx" });
      // console.log("tx cbor : ", JSON.stringify(tx, null, 4))
      // const enrollee = await sdk.provider.overview.getAllAliases()

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