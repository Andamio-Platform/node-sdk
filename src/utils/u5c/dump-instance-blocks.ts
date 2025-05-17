import { CardanoSyncClient } from "@utxorpc/sdk";
import seed from "../../seed.json"
import { bytesToHex } from "@meshsdk/common";
import AndamioSDK from "../..";

export async function searchInstanceTx() {

    const sdk = new AndamioSDK("http://192.168.1.7:50051", "Preprod")

    let client = new CardanoSyncClient({
        uri: "http://192.168.1.7:50051",
    });

    let next_token: any = {
        hash: new Uint8Array(
            Buffer.from(
                "4d715bdb6db1d2b4ef2302d417f425522b512810c7059bdd8b8add5db9c6bdc8",
                "hex"
            )
        ),
        index: BigInt(91741627),
    };

    async function crawlAll() {
        while (!!next_token) {

            let chunk = await client.inner.dumpHistory({
                startToken: next_token,
                maxItems: 10,
            });

            for (const block of chunk.block) {
                const filter = block.chain.value?.body?.tx.filter((tx) => tx.outputs.some((o) => bytesToHex(o.address) === sdk.config.instanceMS.mSCAddress ))
                if (filter && filter.length > 0) {
                    console.log("block : ", block.chain.value?.header?.slot)
                };
            }

            console.log(chunk.nextToken?.index);
            next_token = chunk.nextToken;
        }
    }

    await crawlAll();

}