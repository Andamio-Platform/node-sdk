// src/__tests__/index.test.ts
require('dotenv').config()
import { BlockfrostProvider, bytesToHex, TxParser } from '@meshsdk/core';
import { AndamioSDK } from '../index';
import { CSLSerializer } from '@meshsdk/core-csl';
import { isGlobalStateDatum, toMeshGlobalStateDatum } from '../utils/parser/datum/global-state';

jest.setTimeout(500000);

describe('AndamioSDK', () => {
  let sdk: AndamioSDK;

  beforeEach(() => {
    sdk = new AndamioSDK("https://utxorpc.dolos.nelsonksh.dev:443", 'Mainnet', process.env.DMTR_API_KEY || "");
  });

  describe('overview endpoints', () => {

    // it('should fetch overview data', async () => {
    //   const a = [{

    //     moduleId: "404",
    //     slts: [{
    //       sltId: "0",
    //       sltContent: "Not Found"
    //     }],
    //     assignmentContent: "Do Nothing"

    //   }]
    //   const data = JSON.stringify(a);
    //   console.log("Overview Data:", data);
    // });

    it('should fetch overview data', async () => {
      const data = await sdk.provider.core.stake.getTotalLovelaceStaked()
      console.log("Overview Data:", JSON.stringify(data, null, 2));
    });

    // it('should fetch overview data', async () => {
    //   const data = await sdk.transaction.mintModuleTokens({
    //     alias: "meshTx",
    //     courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd",
    //     listOfModuleDetails: [{
    //       moduleTokenName: "404",
    //       slts: [{
    //         sltId: "0",
    //         sltDescription: "Not Found"
    //       }],
    //       assignment: {
    //         assignmentDescription: "Do Nothing",
    //         prerequisites: []
    //       }
    //     },
    //     {
    //       moduleTokenName: "500",
    //       slts: [{
    //         sltId: "0",
    //         sltDescription: "Internal Server Error"
    //       }],
    //       assignment: {
    //         assignmentDescription: "Also Do Nothing",
    //         prerequisites: []
    //       }
    //     }]
    //   });
    //   console.log("Course State Token Policy:", JSON.stringify(data, null, 2));
    // });

    // it('test', async () => {
    //   const blockfrost = new BlockfrostProvider("https://blockfrost1fnqnszsgxy7f6xm0e9a.blockfrost-m1.demeter.run")
    //   const serializer = new CSLSerializer()
    //   const parser = new TxParser(serializer, blockfrost)

    //   const cbor = "84a900d901028482582005309807ff024d7686a5a1c4c85370cae1406987f8992406b54dc8d8d1fdd78d008258205e610400a8f10f8de505ffd3a463a8e9e84c597e514947e5609bb799b8a993b805825820f183e6cecaaf9c52838a6f82324d60d533d38962224e2d0f49307788cfed816201825820f183e6cecaaf9c52838a6f82324d60d533d38962224e2d0f49307788cfed8162020186a3005839308c724bbc481d9c15931669daec01e1b86ec2d02ad9c5d235c62b54ae96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a00164b62a1581ccb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddda149436f757273654e465401028201d818583dd8799f9f493232326d65736854784e3232326d616e616765722d303031ff581ccb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eadddffa3005839301173418ab95ca604e76932c6843ca3af2d97a5a015456a6a65b4160496c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a001c041ca1581c1173418ab95ca604e76932c6843ca3af2d97a5a015456a6a65b41604a14334303401028201d818589ad8799f9fd8799f4130494e6f7420466f756e64ffffd8799fd8799f4a446f204e6f7468696e67d8799fd87a9f581c15b9dc229b44c15052ef6cc36abd6c10a358c20e14d358cea8b874c3ffd8799fd8799fd87a9f581c96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b44ffffffff9f581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642ff80ffffffa3005839301173418ab95ca604e76932c6843ca3af2d97a5a015456a6a65b4160496c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a001d117ca1581c1173418ab95ca604e76932c6843ca3af2d97a5a015456a6a65b41604a14335303001028201d81858aad8799f9fd8799f413055496e7465726e616c20536572766572204572726f72ffffd8799fd8799f4e416c736f446f204e6f7468696e67d8799fd87a9f581c15b9dc229b44c15052ef6cc36abd6c10a358c20e14d358cea8b874c3ffd8799fd8799fd87a9f581c96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b44ffffffff9f581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642ff80ffffff82583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d1a150e9ef282583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d821a15db6c65a1581cc76c35088ac826c8a0e6947c8ff78d8d4495789bc729419b3a334305a1493232326d65736854780182583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d1a10dd4a57021a0005f7f509a1581c1173418ab95ca604e76932c6843ca3af2d97a5a015456a6a65b41604a2433430340143353030010b58208320f9750dc726d51422d8a90dd3a806ee60f453fb27b9c7bb3adf76abc295020dd9010281825820f183e6cecaaf9c52838a6f82324d60d533d38962224e2d0f49307788cfed8162031082583900a1b4d98edcc4ce0f4e8f11ef73847e624f94c17af0303a32b7aedf75f3fe2fe017a89c1995413475a7cb1796ee953cf8c62fc9ccaebc563d1a00473c07111a0008f3f012d90102828258204df3ebc0592b39124c5cc3a1cf680a5d7ac393531dd308e34ee499fbad7257e7038258208c0240ae3992e138c2b266e47a7898d2f575d6e06d3edf9b18e59b0747aa61b302a105a282000282d8799f493232326d6573685478ff821a000536c81a0727f2b182010082d8799f9fd8799f43343034d8799f9fd8799f4130494e6f7420466f756e64ffffd8799fd8799f4a446f204e6f7468696e67d8799fd87a9f581c15b9dc229b44c15052ef6cc36abd6c10a358c20e14d358cea8b874c3ffd8799fd8799fd87a9f581c96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b44ffffffff9f581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642ff80ffffffffd8799f43353030d8799f9fd8799f413055496e7465726e616c20536572766572204572726f72ffffd8799fd8799f4e416c736f446f204e6f7468696e67d8799fd87a9f581c15b9dc229b44c15052ef6cc36abd6c10a358c20e14d358cea8b874c3ffd8799fd8799fd87a9f581c96c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b44ffffffff9f581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642ff80ffffffffffff821a0009cd3e1a0c35a830f5f6"

    //   const tx = await parser.parse(cbor);
    //   console.log(JSON.stringify(tx, null, 2));

    // });
  })


});