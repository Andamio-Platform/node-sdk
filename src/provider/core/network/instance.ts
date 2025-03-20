import AndamioConfig from "../../../andamio-config.json";
import { UtxorpcClient } from "../../../u5c";
import { SdkError } from "../../../error";
import { Utxo } from "../../../utxo";
import { bytesToHex, hexToString, stringToHex } from "@meshsdk/common";
import { logger } from "../../../logger";

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
                logger.log(`filter ${filter}`);
                asset_name = stringToHex(filter);
                logger.log(`asset_name ${asset_name}`);
            }
            let utxos;
            const c = await this.client.getUtxos(
                this.address
            );
            logger.log('check1');
            logger.log(c.length.toString());
            const d = await this.client.getUtxos(
                this.address,
                this.policy,
            );
            logger.log('check1');
            logger.log(d.length.toString());

            logger.log(`policy ${policy}`);
            logger.log(`this policy ${this.policy}`);
            utxos = await this.client.getUtxos(
                this.address,
                // this.policy,
                // asset_name,
            );
            logger.log('check');
            logger.log(utxos.length.toString());
            // remove when utxorpc node-sdk gets updated
            if (filter) {
                utxos = byFilter({
                    utxos,
                    filter,
                });
            }
            // till here
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

// remove when utxorpc node-sdk gets updated
function byFilter({
    utxos,
    filter,
}: {
    utxos: Utxo[];
    filter: string;
}): Utxo[] {
    const filteredUtxos = utxos.filter((utxo) =>
        utxo.parsedValued?.assets?.some((asset) =>
            asset.assets.some((a) => hexToString(bytesToHex(a.name)) === filter),
        ),
    );

    if (filteredUtxos.length === 0) {
        throw new Error("Filter not found in Instance Validator UTxOs");
    }

    return filteredUtxos;
}
// till here

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