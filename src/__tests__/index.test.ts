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

    // it('should fetch overview data', async () => {
    //   const data = await sdk.provider.core.localStates.course.assignmentState.getUtxoByAlias("cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd", "Zeus");
    //   console.log("Overview Data:", JSON.stringify(data, null, 2));
    // });

    it('should fetch overview data', async () => {
      const data = await sdk.transaction.acceptAssignment({
        approverAlias: "meshTx",
        studentAlias: "Zeus",
        courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd",
        moduleTokenName: "101"
      });
      console.log("Course State Token Policy:", JSON.stringify(data, null, 2));
    });

    // it('test', async () => {
    //   const blockfrost = new BlockfrostProvider("https://blockfrost1fnqnszsgxy7f6xm0e9a.blockfrost-m1.demeter.run")
    //   const serializer = new CSLSerializer()
    //   const parser = new TxParser(serializer, blockfrost)

    //   const cbor = "84a800d90102848258205e610400a8f10f8de505ffd3a463a8e9e84c597e514947e5609bb799b8a993b8048258205e610400a8f10f8de505ffd3a463a8e9e84c597e514947e5609bb799b8a993b805825820700fdd364041d33ab13b1362a917acfdf5fe2a81d1d8b1e7830d52f8d34bd55900825820b7576e2f6155edf39844676c0cc34e251f3c663cfd21e9fc42f031f3252a0532010184a3005839303246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f764296c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a00124864a1581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642a1445a65757301028201d818469f43313031ffa3005839308c724bbc481d9c15931669daec01e1b86ec2d02ad9c5d235c62b54ae96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a00164b62a1581ccb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddda149436f757273654e465401028201d818583dd8799f9f493232326d65736854784e3232326d616e616765722d303031ff581ccb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eadddff82583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d821a002eb559a1581cc76c35088ac826c8a0e6947c8ff78d8d4495789bc729419b3a334305a1493232326d65736854780182583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d1a00408d02021a00048f5e0b5820e083019dd3fcd6df646aea9465dbb772a214cd32af1e8c90b16f4e2a99675f630dd9010281825820c33240c8f103816c60024d65e7d7ae3ffe446d06da70f98fd09218da3549a671001082583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d1a00457433111a0006d70d12d90102828258204df3ebc0592b39124c5cc3a1cf680a5d7ac393531dd308e34ee499fbad7257e7038258208c0240ae3992e138c2b266e47a7898d2f575d6e06d3edf9b18e59b0747aa61b301a105a282000282d87a80821a000320fc1a044301ae82000382d8799f493232326d6573685478ff821a0003cc011a058e6af6f5f6"

    //   const tx = await parser.parse(cbor);
    //   console.log(JSON.stringify(tx, null, 2));

    // });
  })


});