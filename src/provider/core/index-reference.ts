import { cardano } from "@utxorpc/spec";
import { UtxorpcClient } from "../../common/u5c";
import { IndexReferenceDatum, isIndexReferenceDatum } from "../../utils/parser/datum/index-reference";
import { serializeAddressObj } from "@meshsdk/core-csl";
import { builtinByteString, bytesToHex, ConStr0, conStr0, conStr1, PubKeyAddress, Script, VerificationKey } from "@meshsdk/common";
import { NetworkId } from "../../common/network";
import { serializeRewardAddress } from "@meshsdk/core";

export class IndexReference {

    public readonly address: string;
    public readonly policy: string;

    constructor(private readonly client: UtxorpcClient) {
        this.address = this.client.andamioConfig.indexRefMS.mSCAddress;
        this.policy = this.client.andamioConfig.indexRefMS.mSCPolicyID;
    }

    private async getDatum(): Promise<IndexReferenceDatum> {
        try {
            const utxos = await this.client.getUtxos(this.address, this.policy);
            if (utxos.length === 0) {
                throw new Error(`No UTXOs found for address: ${this.address}`);
            }
            const datum = utxos[0].parsedValued?.datum?.payload as cardano.PlutusData;
            if (isIndexReferenceDatum(datum)) {
                return datum
            } else {
                throw new Error(`No correct datum found in UTXOs for Index Reference`);
            }
        } catch (err) {
            throw new Error(`Failed to fetch datum: ${err}`);
        }
    }

    async getProtocolTreasuryAddress(): Promise<string> {
        try {
            const datum = await this.getDatum();
            const protocolTreasuryAddressPart = datum.plutusData.value.fields[0].plutusData.value;
            const stakingKeyPart: ConStr0<[ConStr0<[VerificationKey]>]> = conStr0([conStr0([conStr0([builtinByteString(bytesToHex(protocolTreasuryAddressPart.fields[1].plutusData.value.fields[0].plutusData.value.fields[0].plutusData.value.fields[0].plutusData.value))])])])
            const pubKeyAddress: PubKeyAddress = conStr0([
                conStr0([builtinByteString(bytesToHex(protocolTreasuryAddressPart.fields[0].plutusData.value.fields[0].plutusData.value))]),
                stakingKeyPart
            ])
            const serializeAddress = serializeAddressObj(pubKeyAddress, NetworkId[this.client.network]);
            return serializeAddress;
        } catch (err) {
            throw new Error(`Failed to fetch protocol treasury address: ${err}`);
        }
    }

    async getObserverStakeAddress(): Promise<string> {
        try {
            const datum = await this.getDatum();
            const observerStakeAddressPart = datum.plutusData.value.fields[3].plutusData.value.items[0].plutusData.value.fields[0].plutusData.value;
            const serializeAddress = serializeRewardAddress(bytesToHex(observerStakeAddressPart), true, NetworkId[this.client.network] as (0 | 1));
            return serializeAddress;
        } catch (err) {
            throw new Error(`Failed to fetch observer stake address: ${err}`);
        }
    }

    async getProtocolFeeAmountInLovelace(): Promise<string> {
        try {
            const datum = await this.getDatum();
            const protocolFeeAmountPart = datum.plutusData.value.fields[2].plutusData.value.items[0].plutusData.value.fields[2].plutusData.value;
            const parsedBigInt = JSON.parse(JSON.stringify(protocolFeeAmountPart)) as { int: string };
            return parsedBigInt.int;
        } catch (err) {
            throw new Error(`Failed to fetch protocol fee amount in lovelace: ${err}`);
        }
    }

}