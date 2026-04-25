import { StacksMainnet, StacksTestnet, StacksNetwork } from '@stacks/network';
import { makeContractCall, broadcastTransaction, AnchorMode, SignedContractCallOptions } from '@stacks/transactions';

export class StacksCheckInSDK {
  public network: StacksNetwork;

  constructor(networkType: 'mainnet' | 'testnet' = 'testnet') {
    this.network = networkType === 'mainnet' ? new StacksMainnet() : new StacksTestnet();
  }

  /**
   * Helper to build a check-in transaction
   * @param contractAddress 
   * @param contractName 
   * @param senderKey 
   * @returns {Promise<any>}
   */
  async buildCheckInTx(contractAddress: string, contractName: string, senderKey: string) {
    const txOptions: SignedContractCallOptions = {
      contractAddress,
      contractName,
      functionName: 'check-in',
      functionArgs: [],
      senderKey,
      validateWithAbi: true,
      network: this.network,
      anchorMode: AnchorMode.Any,
    };

    return await makeContractCall(txOptions);
  }

  /**
   * Broadcasts a transaction to the Stacks network
   * @param transaction 
   * @returns {Promise<any>}
   */
  async broadcastTx(transaction: any) {
    return await broadcastTransaction(transaction, this.network);
  }
}
