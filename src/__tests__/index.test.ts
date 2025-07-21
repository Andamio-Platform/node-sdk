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
      const data = await sdk.transaction.enrollCourse({
        alias: "Zeus",
        courseId: "cb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd"
      })
      console.log("Course State Token Policy:", JSON.stringify(data, null, 2));
    });

    // it('test', async () => {
    //   const blockfrost = new BlockfrostProvider("https://blockfrost1fnqnszsgxy7f6xm0e9a.blockfrost-m1.demeter.run")
    //   const serializer = new CSLSerializer()
    //   const parser = new TxParser(serializer, blockfrost)

    //   const cbor = "84a900d90102838258207851cb437604a3c79545c0d4c31bb13b9d4b9a675d9edcbc1b74f40c537910e4038258207851cb437604a3c79545c0d4c31bb13b9d4b9a675d9edcbc1b74f40c537910e404825820e7147f6143980eda4279ef2c76c70b806335854029332bbd5f45a0e20379585e030184a300583930fc683d569387e6452300cd5c9b3d1d9b49ecd4ec2f714254fc672ef896c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a00177a6ea1581cc76c35088ac826c8a0e6947c8ff78d8d4495789bc729419b3a334305a1473130305a65757301028201d8185851d8799f581cc76c35088ac826c8a0e6947c8ff78d8d4495789bc729419b3a334305445a6575739fd8799f581ccb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd80d87a80ffff4120ffa3005839303246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f764296c9cc5d8649f772392e338cd2da2e62b26ff08c2f2ec29ac1a43b4401821a0011f436a1581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642a1445a65757301028201d8184180825839008d521213084ab568aa43ce86ed84b7d4a7552448081563e218066a2db639e034ed17e28762cee7f7ab50b7b9714c5588efd804f0c05fbb07821a2035f196a1581cc76c35088ac826c8a0e6947c8ff78d8d4495789bc729419b3a334305a1473232325a65757301825839008d521213084ab568aa43ce86ed84b7d4a7552448081563e218066a2db639e034ed17e28762cee7f7ab50b7b9714c5588efd804f0c05fbb071a2a2fbc3d021a0005c63f09a1581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642a1445a657573010b58200bba44876276c42b585b46af168e580e9e0ff0450ea67f4415b74aa2b876d2a20dd9010281825820e7147f6143980eda4279ef2c76c70b806335854029332bbd5f45a0e20379585e0010825839008d521213084ab568aa43ce86ed84b7d4a7552448081563e218066a2db639e034ed17e28762cee7f7ab50b7b9714c5588efd804f0c05fbb071a0043a1e1111a0008a95f12d90102828258208a3a9c393bec05d40b73ed459a10a5c9c7a11f197c88d1aaca48080a2e48e7c5008258208c0240ae3992e138c2b266e47a7898d2f575d6e06d3edf9b18e59b0747aa61b303a105a282000082d8799fd8799f581ccb69f0e1aa2c2173df2bb5274c7ce628883fb031e9161107285eaddd80581c3246c657f58c94ff750a1da17e8ea26afc58c880c8f580321c0f7642ffff821a00085d721a0b1c9bbf82010082d8799f445a657573ff821a0004909f1a06371570f5f6"

    //   const tx = await parser.parse(cbor);
    //   console.log(JSON.stringify(tx, null, 2));

    // });
  })


});