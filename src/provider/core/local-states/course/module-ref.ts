import { Utxo } from "../../../../common/utxo";
import { SdkError } from "../../../../common/error";
import { UtxorpcClient } from "../../../../common/u5c";
import { getAddress, getLocalStatePolicy } from "../../../../utils/utils";
import { logger } from "../../../../common/logger";
import { bytesToHex, hexToString } from "@meshsdk/common";


/**
 * ModuleRef class for interacting with course module references.
 * Provides methods to get addresses and UTXOs for course modules.
 * @internal
 */
export class ModuleRef {
  /**
   * Creates a new ModuleRef instance.
   * @param client - The UtxorpcClient used for blockchain interactions.
   */
  constructor(private readonly client: UtxorpcClient) { }

  /**
   * Derives and returns the address for a course module.
   * @param courseNftPolicy - The policy ID of the course NFT.
   * @returns A Promise resolving to the derived address string.
   * @throws {SdkError} If address derivation fails.
   */
  async getAddress(courseNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, courseNftPolicy, "ModuleScripts");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  async getModuleReferenceTokenPolicy(courseNftPolicy: string): Promise<string> {
    try {
      return await getLocalStatePolicy(this.client, courseNftPolicy, "ModuleScripts");
    } catch (error) {
      throw new SdkError(`Failed to get course state token policy: ${error}`);
    }
  }

  /**
   * Retrieves UTXOs for a course module.
   * @param courseNftPolicy - Optional policy ID of the course NFT. Required if address is not provided.
   * @param address - Optional address of the module. If not provided, it will be derived using courseNftPolicy.
   * @returns A Promise resolving to an array of UTXOs.
   * @throws {SdkError} If neither courseNftPolicy nor address is provided, or if fetching UTXOs fails.
   */
  async getUtxos(courseNftPolicy?: string, address?: string): Promise<Utxo[]> {
    if (!courseNftPolicy && !address) {
      throw new SdkError("Either courseNftPolicy or address must be provided");
    }
    try {
      if (!address) {
        address = await this.getAddress(courseNftPolicy!);
        logger.log(`ModuleRef address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }

  async getUtxoByModuleTokenName(courseId: string, moduleTokenName: string): Promise<Utxo> {
    try {
      const utxos = await this.getUtxos(courseId);
      const utxo = utxos.find((utxo) =>
        utxo.parsedValued?.assets.some((asset) =>
          asset.assets.some((a) => hexToString(bytesToHex(a.name)) === moduleTokenName)
        )
      );
      if (!utxo) {
        throw new SdkError(`No UTXO found with the specified courseId and moduleTokenName: ${courseId}, ${moduleTokenName}`);
      }
      return utxo;
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXO by module token name: ${error}`);
    }
  }
}