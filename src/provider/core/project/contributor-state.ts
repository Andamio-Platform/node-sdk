import { Utxo } from "../../../utxo";
import { SdkError } from "../../../error";
import { UtxorpcClient } from "../../../u5c";
import { getAddress } from "../utils";
import { logger } from "../../../logger";
import { bytesToHex, hexToString } from "@meshsdk/common";


/**
 * Represents the state of a contributor in a project.
 * 
 * This class provides methods to interact with contributor state on the blockchain,
 * such as retrieving addresses and UTXOs associated with a project's NFT policy.
 * 
 * @class ContributorState
 * @internal
 */
export class ContributorState {
  /**
   * Creates a new ContributorState instance.
   * @param client - The UtxorpcClient used to interact with the blockchain.
   */
  constructor(private readonly client: UtxorpcClient) { }

  /**
   * Retrieves the contributor address for a specific project.
   * @param projectNftPolicy - The policy ID of the project NFT.
   * @returns A promise that resolves to the contributor address as a string.
   * @throws {SdkError} If the address derivation fails.
   */
  async getAddress(projectNftPolicy: string): Promise<string> {
    try {
      return await getAddress(this.client, projectNftPolicy, "ContributorStateScripts");
    } catch (error) {
      throw new SdkError(`Failed to derive address: ${error}`);
    }
  }

  /**
   * Retrieves UTXOs for a contributor.
   * @param projectNftPolicy - Optional. The policy ID of the project NFT. Either this or address must be provided.
   * @param address - Optional. The contributor's address. If not provided, it will be derived from the projectNftPolicy.
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
        logger.log(`ContributorState address: ${address}`);
      }
      return await this.client.getUtxos(address);
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }

  async getUtxoByAlias(projectId: string, alias: string): Promise<Utxo> {
    try {
      const utxos = await this.getUtxos();
      const utxo = utxos.find((utxo) =>
        utxo.parsedValued?.assets.some((asset) => asset.assets.some((a) => hexToString(bytesToHex(a.name)) === alias))
      );
      if (!utxo) {
        throw new SdkError(`No UTXO found with the specified projectId and alias: ${projectId}, ${alias}`);
      }
      return utxo;
    } catch (error) {
      throw new SdkError(`Failed to fetch UTXOs: ${error}`);
    }
  }
}