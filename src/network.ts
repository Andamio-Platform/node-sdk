/**
 * Represents the different network environments available.
 *
 * @typedef {("Mainnet" | "Preprod" | "Preview")} Network
 *
 * @property {"Mainnet"} Mainnet - The main network environment.
 * @property {"Preprod"} Preprod - The pre-production network environment.
 * @property {"Preview"} Preview - The preview network environment.
 */
export type Network = "Mainnet" | "Preprod" | "Preview";

/**
 * A record that maps network names to their corresponding numeric IDs.
 *
 * @remarks
 * This constant is used to identify different network environments by their unique IDs.
 *
 * @example
 * Here's how you can use the `NetworkId` to get the ID of the Mainnet:
 * ```typescript
 * const mainnetId = NetworkId.Mainnet; // 1
 * ```
 *
 * @typeParam Network - The type representing the network names.
 * @typeParam number - The type representing the network IDs.
 */
export const NetworkId: Record<Network, number> = {
    Mainnet: 1,
    Preprod: 0,
    Preview: 0,
};