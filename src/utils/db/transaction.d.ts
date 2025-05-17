export type Transaction = {
    body: {
        inputs: Array<{
            transaction_id: string;
            index: number;
        }>;
        outputs: Array<{
            address: string;
            amount: {
                coin: string;
                multiasset?: {
                    [policyId: string]: {
                        [assetName: string]: string;
                    };
                } | null;
            };
            plutus_data?: { Data: string } | null;
            script_ref?: { PlutusScript: string } | null;
        }>;
        fee: string;
        ttl: string | null;
        certs: any[] | null;
        withdrawals: { [rewardAddress: string]: string } | null;
        update: any | null;
        auxiliary_data_hash: string | null;
        validity_start_interval: string | null;
        mint?: Array<[string, { [assetName: string]: string }]>;
        script_data_hash: string;
        collateral: Array<{
            transaction_id: string;
            index: number;
        }>;
        required_signers: any[] | null;
        network_id: number | null;
        collateral_return?: {
            address: string;
            amount: {
                coin: string;
                multiasset?: {
                    [policyId: string]: {
                        [assetName: string]: string;
                    };
                } | null;
            };
            plutus_data?: any;
            script_ref?: any;
        } | null;
        total_collateral?: string;
        reference_inputs?: Array<{
            transaction_id: string;
            index: number;
        }>;
        voting_procedures?: any;
        voting_proposals?: any;
        donation?: any;
        current_treasury_value?: any;
    };
    witness_set: {
        vkeys?: Array<{
            vkey: string;
            signature: string;
        }>;
        native_scripts?: Array<{
            ScriptAny?: {
                native_scripts: Array<{
                    ScriptPubkey: {
                        addr_keyhash: string;
                    };
                }>;
            };
        }>;
        bootstraps?: any;
        plutus_scripts?: any;
        plutus_data?: any;
        redeemers?: Array<{
            tag: string;
            index: string;
            data: string;
            ex_units: {
                mem: string;
                steps: string;
            };
        }>;
    };
    is_valid: boolean;
    auxiliary_data: any;
};
