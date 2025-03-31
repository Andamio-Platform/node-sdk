import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";
import { logger } from "../../../logger";


/**
 * Manages the state of assignments in a course.
 * This class provides functionality to interact with assignment-related blockchain data.
 */
export class AssignmentState {
  /**
   * Creates a new instance of AssignmentState.
   * @param client - The UtxorpcClient instance used for blockchain interactions.
   */
  constructor(private readonly client: UtxorpcClient) { }

  /**
   * Derives the blockchain address for a course's assignment validator.
   * @param courseNftPolicy - The policy ID of the course NFT.
   * @returns Promise that resolves to the derived address string.
   * @throws {SdkError} If address derivation fails.
   */
  async getAddress(courseNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, courseNftPolicy, "AssignmentValidator");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  /**
   * Retrieves UTXOs related to assignments for a specific course.
   * @param courseNftPolicy - The policy ID of the course NFT. Required if address is not provided.
   * @param address - Optional address to fetch UTXOs from. If not provided, derived from courseNftPolicy.
   * @returns Promise that resolves to an array of UTXOs.
   * @throws {SdkError} If neither courseNftPolicy nor address is provided, or if fetching UTXOs fails.
   */
  async getUtxos(courseNftPolicy?: string, address?: string): Promise<Utxo[]> {
    if (!courseNftPolicy && !address) {
      throw new SdkError("Either courseNftPolicy or address must be provided");
    }
    try {
      if (!address) {
        address = await this.getAddress(courseNftPolicy!);
        logger.log(`AssignmentState address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}