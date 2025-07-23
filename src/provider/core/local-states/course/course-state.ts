import { Utxo } from "../../../../common/utxo";
import { SdkError } from "../../../../common/error";
import { UtxorpcClient } from "../../../../common/u5c";
import { getAddress, getLocalStatePolicy } from "../../../../utils/utils";
import { logger } from "../../../../common/logger";
import { bytesToHex, hexToString } from "@meshsdk/common";


/**
 * Represents the state of a course in the system.
 * Provides methods to interact with course-related blockchain data.
 * @internal
 */
export class CourseState {
  /**
   * Creates a new instance of CourseState.
   * @param client - The UTXORPC client to use for blockchain interactions.
   */
  constructor(private readonly client: UtxorpcClient) { }

  /**
   * Derives the blockchain address for a given course NFT policy.
   * @param courseNftPolicy - The policy ID of the course NFT.
   * @returns Promise that resolves to the derived address.
   * @throws {SdkError} If address derivation fails.
   */
  async getAddress(courseNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, courseNftPolicy, "CourseStateScripts");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  async getCourseStateTokenPolicy(courseNftPolicy: string): Promise<string> {
    try {
      return await getLocalStatePolicy(this.client, courseNftPolicy, "CourseStateScripts");
    } catch (error) {
      throw new SdkError(`Failed to get course state token policy: ${error}`);
    }
  }

  /**
   * Retrieves UTXOs for a course state, either by courseNftPolicy or direct address.
   * @param courseNftPolicy - Optional. The policy ID of the course NFT.
   * @param address - Optional. The direct address to query UTXOs from.
   * @returns Promise that resolves to an array of UTXOs.
   * @throws {SdkError} If neither courseNftPolicy nor address is provided, or if fetching UTXOs fails.
   * @remarks At least one of courseNftPolicy or address must be provided.
   */
  async getUtxos(courseNftPolicy?: string, address?: string): Promise<Utxo[]> {
    if (!courseNftPolicy && !address) {
      throw new SdkError("Either courseNftPolicy or address must be provided");
    }
    try {
      if (!address) {
        address = await this.getAddress(courseNftPolicy!);
        logger.log(`CourseState address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }

  async getUtxoByAlias(courseId: string, alias: string): Promise<Utxo> {
    try {
      const utxos = await this.getUtxos(courseId);
      const utxo = utxos.find((utxo) => {
        return utxo.parsedValued?.assets.some((asset) =>
          asset.assets.some((a) => hexToString(bytesToHex(a.name)) === alias)
        );
      });
      if (!utxo) {
        throw new SdkError(`No UTXO found with the specified courseId and alias: ${courseId}, ${alias}`);
      }
      return utxo;
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}