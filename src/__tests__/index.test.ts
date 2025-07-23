// src/__tests__/index.test.ts
import { BlockfrostProvider, TxParser } from '@meshsdk/core';
import { AndamioSDK } from '../index';
import { CSLSerializer } from '@meshsdk/core-csl';
import { isGlobalStateDatum, toMeshGlobalStateDatum } from '../utils/parser/datum/global-state';

jest.setTimeout(500000);

describe('AndamioSDK', () => {
  let sdk: AndamioSDK;

  beforeEach(() => {
    sdk = new AndamioSDK("https://preprod.utxorpc-v0.demeter.run:443", "Preprod", "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353");
  });

  describe('overview endpoints', () => {

    it('should fetch overview data', async () => {
      const data = await sdk.transaction.commitAssignment({
        // userAddress: "",
        alias: "Zeus",
        courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd",
        moduleTokenName: "101",
        assignmentEvidenceInHex: "20"
      })
      console.log("Course State Token Policy:", JSON.stringify(data, null, 2));
    });

    // it('test', async () => {
    //   const blockfrost = new BlockfrostProvider("https://blockfrost1fnqnszsgxy7f6xm0e9a.blockfrost-m1.demeter.run")
    //   const serializer = new CSLSerializer()
    //   const parser = new TxParser(serializer, blockfrost)

    //   const cbor = "84a800d9010283825820944bcb6a61e3e36b6b5d414e8f777cfb420d78bf769c86bb9f0d82ba9450981100825820944bcb6a61e3e36b6b5d414e8f777cfb420d78bf769c86bb9f0d82ba9450981101825820f2310d744bfb661166f6ac9f834b0218b46f638d04990c3a0c968d3910e3d3ca020182a30058393015b9dc229b44c15052ef6cc36abd6c10a358c20e14d358cea8b874c396c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a001a80e2a1581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642a1445a65757301028201d8185882d8799f43313031d8799f4120ff581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642445a657573d8799fd87a9f581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642ffd8799fd8799fd87a9f581c96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b44ffffffff80ff825839008d521213084ab568aa43ce86ed84b7d4a7552448081563e218066a2db639e034ed17e28762cee7f7ab50b7b9714c5588efd804f0c05fbb07821a00510d0da1581cc76c35088ac826c8a0e6947c8ff78d8d4495789bc729419b3a334305a1473232325a65757301021a000440b90b582022dc81df01338769a363dcacbdbc67750d8adf97e5316d261a0747c4d628984e0dd9010281825820e7147f6143980eda4279ef2c76c70b806335854029332bbd5f45a0e20379585e0010825839008d521213084ab568aa43ce86ed84b7d4a7552448081563e218066a2db639e034ed17e28762cee7f7ab50b7b9714c5588efd804f0c05fbb071a0045ea2a111a0006611612d901028282582086137970d437b7cb2544ee04f4ef79cfffbfa1901c6ef8bd4678fce8aa2e307b018258208c0240ae3992e138c2b266e47a7898d2f575d6e06d3edf9b18e59b0747aa61b303a105a182000082d87a9fd8799f445a65757343313031d8799f4120ffffff821a0005afd71a076def95f5f6"

    //   const tx = await parser.parse(cbor);
    //   console.log(JSON.stringify(tx, null, 2));

    // });
  })


});