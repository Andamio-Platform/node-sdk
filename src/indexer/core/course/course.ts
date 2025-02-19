import { Utxo } from "~/types";
import { Instance } from "../instance";
import { bytesToHex, hexToString } from "@meshsdk/common";
import { serializePlutusScript } from "@meshsdk/core";
import cbor from 'cbor';
import UtxorpcClient, { AndamioConfig, env } from "~/index";
import { SdkError } from "~/errors";

export class Course {
    private readonly address: Promise<string>;
    private readonly instance: Instance;
    private readonly client: UtxorpcClient;

    constructor(private readonly courseNftPolicy: string) {
        this.instance = new Instance();
        this.client = new UtxorpcClient(
            env.BASE_URL,
            env.DMTR_API_KEY,
            env.REDIS_URL
        );
        this.address = this.initialize();
    }

    private async initialize(): Promise<string> {
        try {
            const instanceUtxos = await this.instance.getUtxos();
            const courseUtxos = byFilter({
                utxos: instanceUtxos,
                filter: 'CourseStateScripts',
            });
            const courseNftUtxo = byPolicy({
                utxos: courseUtxos,
                policy: this.courseNftPolicy,
            });

            if (!courseNftUtxo[0].parsedValued?.script?.script.value) {
                throw new Error('Invalid course NFT UTXO: missing script value');
            }

            const cborHex = bytesToHex(courseNftUtxo[0].parsedValued.script.script.value as Uint8Array);
            const doubleEncodedCborHex = cbor
                .encode(Buffer.from(cborHex, 'hex'))
                .toString('hex');

            const serializedScript = serializePlutusScript(
                { code: doubleEncodedCborHex, version: 'V3' },
                AndamioConfig.stakingSH,
                env.NETWORK_ID,
                true
            );

            return serializedScript.address;
        } catch (error) {
            throw new SdkError(`Failed to initialize course: ${error}`);
        }
    }

    async getUtxos(): Promise<Utxo[]> {
        try {
            const address = await this.address;
            console.log(address);
            return await this.client.getUtxos(address);
        } catch (error) {
            throw new SdkError(`Failed to fetch UTXOs: ${error}`);
        }
    }
}

function byFilter({
    utxos,
    filter,
}: {
    utxos: Utxo[];
    filter: string;
}): Utxo[] {
    const filteredUtxos = utxos.filter((utxo) =>
        utxo.parsedValued?.assets?.some((asset) => 
            asset.assets.some((a) => hexToString(bytesToHex(a.name)) === filter)
        )
    );

    if (filteredUtxos.length === 0) {
        throw new Error('Filter not found in Instance Validator UTxOs');
    }

    return filteredUtxos;
}

function byPolicy({
    utxos,
    policy,
}: {
    utxos: Utxo[];
    policy: string;
}): Utxo[] {
    const filteredUtxos = utxos.filter((utxo) => {
        const nftPolicy = bytesToHex(utxo.parsedValued?.datum?.payload?.plutusData.value as Uint8Array);
        return nftPolicy === policy;
    });

    if (filteredUtxos.length === 0) {
        throw new Error('Policy not found in Instance Validator UTxOs');
    }

    return filteredUtxos;
}