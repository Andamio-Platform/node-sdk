import AndamioConfig from "../../../andamio-config.json";
import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";
import { bytesToHex, stringToHex } from "@meshsdk/common";

export type InstanceFilter =
    | 'ModuleScripts'
    | 'CourseStateScripts'
    | 'AssignmentValidator'
    | 'TreasuryScripts'
    | 'TreasuryToken'
    | 'Escrow1'
    | 'ContributorStateScripts'

export class Instance {
    public readonly address: string = AndamioConfig.instanceMS.mSCAddress;
    public readonly policy: string = AndamioConfig.instanceMS.mSCPolicyID;

    constructor(private readonly client: UtxorpcClient) { }

    async getUtxos(policy?: string, filter?: InstanceFilter): Promise<Utxo[]> {
        try {
            let asset_name;
            if (filter) {
                asset_name = stringToHex(filter);
            }
            let utxos;
            utxos = await this.client.getUtxos(
                this.address,
                this.policy,
                asset_name,
            );
            if (policy) {
                utxos = byInstancePolicy({
                    utxos,
                    policy,
                });
            }
            return utxos;
        } catch (err) {
            throw new SdkError(`Failed to fetch UTXOs: ${err}`);
        }
    }
}

function byInstancePolicy({
    utxos,
    policy,
}: {
    utxos: Utxo[];
    policy: string;
}): Utxo[] {
    const filteredUtxos = utxos.filter((utxo) => {
        const nftPolicy = bytesToHex(
            utxo.parsedValued?.datum?.payload?.plutusData.value as Uint8Array,
        );
        return nftPolicy === policy;
    });

    if (filteredUtxos.length === 0) {
        throw new Error("Policy not found in Instance Validator UTxOs");
    }

    return filteredUtxos;
}