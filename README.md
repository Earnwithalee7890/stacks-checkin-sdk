# @earnwithalee/stacks-checkin-sdk

This is a specialized SDK to interact with the Stacks Check-in smart contracts. It is specifically designed and optimized for the **Stacks Builder Rewards April Event** on the **Talent Protocol**.

## Features

- Built-in Stacks network configurations.
- Helpers to execute the `check-in` smart contract calls.
- Automated payload construction for `broadcastTransaction`.

## Installation

You can install this package via the public npmjs registry:

```bash
npm install @earnwithalee/stacks-checkin-sdk
```

## Usage

```javascript
const { StacksCheckInSDK } = require('@earnwithalee/stacks-checkin-sdk');

const sdk = new StacksCheckInSDK('testnet'); // or 'mainnet'

// 1. Build the transaction
const tx = await sdk.buildCheckInTx(
  'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM', 
  'check-in-contract', 
  'YOUR_PRIVATE_SENDER_KEY'
);

// 2. Broadcast the transaction
const result = await sdk.broadcastTx(tx);
console.log(result);
```

## Adding to Talent Protocol

To ensure your downloads are tracked correctly for the April event:
1. Ensure your repository on Talent Protocol is linked to this npm package.
2. Ensure you have published this package publicly on `npmjs.org`.
