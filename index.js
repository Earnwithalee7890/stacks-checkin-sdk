// Stacks Check-in SDK Entry Point
const { StacksMainnet, StacksTestnet } = require('@stacks/network');
const { makeContractCall, broadcastTransaction, AnchorMode } = require('@stacks/transactions');

class StacksCheckInSDK {
  constructor(networkType = 'testnet') {
    this.network = networkType === 'mainnet' ? new StacksMainnet() : new StacksTestnet();
  }

  /**
   * Helper to build a check-in transaction
   * @param {string} contractAddress 
   * @param {string} contractName 
   * @param {string} senderKey 
   * @returns {Promise<any>}
   */
  async buildCheckInTx(contractAddress, contractName, senderKey) {
    const txOptions = {
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
   * @param {any} transaction 
   * @returns {Promise<any>}
   */
  async broadcastTx(transaction) {
    return await broadcastTransaction(transaction, this.network);
  }
}

module.exports = {
  StacksCheckInSDK
};
