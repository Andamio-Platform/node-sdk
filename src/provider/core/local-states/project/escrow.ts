import { Utxo } from "../../../../common/utxo";
import { SdkError } from "../../../../common/error";
import { UtxorpcClient } from "../../../../common/u5c";
import { getAddress } from "../../../../utils/utils";
import { logger } from "../../../../common/logger";
import { bytesToHex, hexToString } from "@meshsdk/common";


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

  async getUtxoByAlias(projectId: string, alias: string): Promise<Utxo> {
    try {
      const utxos = await this.getUtxos();
      const utxo = utxos.find((utxo) =>
        utxo.parsedValued?.assets.some((asset) =>
          asset.assets.some((a) => hexToString(bytesToHex(a.name)) === alias)
        )
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