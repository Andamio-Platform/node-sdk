import { Utxo } from "../../../../common/utxo";
import { SdkError } from "../../../../common/error";
import { UtxorpcClient } from "../../../../common/u5c";
import { getAddress } from "../../../../utils/utils";
import { logger } from "../../../../common/logger";


/**
 * Represents the treasury functionality for a project.
 * This class provides methods to interact with project treasuries.
 * @internal
 */
export class Treasury {
  /**
   * Creates a new Treasury instance.
   * @param client - The UtxorpcClient instance used for blockchain interactions.
   */
  constructor(private readonly client: UtxorpcClient) { }

  /**
   * Retrieves the treasury address for a specific project.
   * @param projectNftPolicy - The NFT policy ID of the project.
   * @returns A promise that resolves to the treasury address as a string.
   * @throws {SdkError} If the address derivation fails.
   */
  async getAddress(projectNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, projectNftPolicy, "TreasuryScripts");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }
  /**
   * Gets the UTXOs associated with a treasury.
   * @param projectNftPolicy - Optional. The NFT policy ID of the project. Required if address is not provided.
   * @param address - Optional. The treasury address. If not provided, it will be derived from the projectNftPolicy.
   * @returns A promise that resolves to an array of UTXOs.
   * @throws {SdkError} If neither projectNftPolicy nor address is provided, or if fetching UTXOs fails.
   */
  async getUtxos(projectNftPolicy?: string, address?: string): Promise<Utxo[]> {
    if (!projectNftPolicy && !address) {
      throw new SdkError("Either projectNftPolicy or address must be provided");
    }
    try {
      if (!address) {
        address = await this.getAddress(projectNftPolicy!);
        logger.log(`Treasury address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}