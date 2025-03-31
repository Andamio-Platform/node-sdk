import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";
import { logger } from "../../../logger";


/**
 * A class representing the escrow functionality for project-related transactions.
 * Escrow manages the addresses and UTXOs associated with project NFT policies.
 * @internal
 */
export class Escrow {
  /**
   * Creates a new Escrow instance.
   * @param client - The UTXORPC client used for blockchain interactions.
   */
  constructor(private readonly client: UtxorpcClient) { }

  /**
   * Derives the escrow address for a given project NFT policy.
   * @param projectNftPolicy - The policy ID of the project NFT.
   * @returns A promise that resolves to the escrow address string.
   * @throws {SdkError} If the address derivation fails.
   */
  async getAddress(projectNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, projectNftPolicy, "Escrow1");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  /**
   * Retrieves UTXOs associated with a project's escrow address.
   * @param projectNftPolicy - Optional. The policy ID of the project NFT.
   * @param address - Optional. The escrow address to query directly.
   * @returns A promise that resolves to an array of UTXOs.
   * @throws {SdkError} If neither projectNftPolicy nor address is provided, or if fetching UTXOs fails.
   * @remarks Either projectNftPolicy or address must be provided.
   */
  async getUtxos(projectNftPolicy?: string, address?: string): Promise<Utxo[]> {
    if (!projectNftPolicy && !address) {
      throw new SdkError("Either projectNftPolicy or address must be provided");
    }
    try {
      if (!address) {
        address = await this.getAddress(projectNftPolicy!);
        logger.log(`Escrow address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}