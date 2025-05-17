import { CardanoSyncClient } from "@utxorpc/sdk";
import { sync } from "@utxorpc/spec";

export async function readTip() {
    const cardanoSyncClient = new CardanoSyncClient({
        uri: "http://192.168.1.7:50051"
    })

    //   const tip = await cardanoSyncClient.readTip()
    // const tip = await cardanoSyncClient.fetchBlock({
    //     slot: "91741627",
    //     hash: "4d715bdb6db1d2b4ef2302d417f425522b512810c7059bdd8b8add5db9c6bdc8"
    // })

        let client = new CardanoSyncClient({
        uri: "https://preprod.utxorpc-v0.demeter.run:443",
        headers: {
            "dmtr-api-key": "dmtr_utxorpc15dnupstcsym5xjd7yha0eccta5x6s353"
        }
    });

    let next_token: any = {
        hash: new Uint8Array(
            Buffer.from(
                "53cacd6e64a93e7344a216bd35d7675bcdba273e87b82e2678875c5054bdeb67",
                "hex"
            )
        ),
        index: BigInt(55391767),
    };

    async function getBlock() {
        let chunk = await client.inner.dumpHistory({
            startToken: next_token,
            maxItems: 1,
            fieldMask: {
                paths: ["nativeBytes"]
            }
        });

        for (const block of chunk.block) {
            console.log("block : ", block);
            // console.log(JSON.stringify(block.chain.value?.body?.tx[0], null, 4));
        }
    }

    async function crawlAll() {
        while (!!next_token) {
            console.log("start");
            let chunk = await client.inner.dumpHistory({
                startToken: next_token,
                maxItems: 10,
            });

            for (const block of chunk.block) {
                console.log("block : ", block.chain.value?.header?.slot);
            }
            console.log(chunk.nextToken?.index);
            next_token = chunk.nextToken;
        }
    }

    await getBlock();


    // console.log("tip : ", tip)
    //   console.log(JSON.stringify(tip, null, 4))
}