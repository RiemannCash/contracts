# [RiemannCash](https://riemann.cash)
RiemannCash focuses on private transaction, with divisible deposits, lower fees and faster withdrawals, which is based on zero-knowledge proof, incremental merkle tree and poseidon algorithm.

## Motivation
Tornado was [banned](https://twitter.com/TornadoCash/status/1557048526986780677), and transfers between accounts become traceable. BUT **Privacy Protection** is an inherent feature of the blockchain.

Face the regulators, we yield?

[RiemannCash](https://riemann.cash) focuses on private transaction, with divisible deposits, lower fees and faster withdrawals, which is based on [zero-knowledge proof](https://en.wikipedia.org/wiki/Zero-knowledge_proof), [incremental merkle tree](https://github.com/privacy-scaling-explorations/zk-kit/tree/main/packages/incremental-merkle-tree.sol) and [poseidon algorithm](https://www.poseidon-hash.info).

Using [RiemannCash](https://riemann.cash) means full privacy. When tokens are deposited to Riemann, withdrawn from Riemann, user Txs are fully encapsulated, cuz all Txs will generate zero-knowledge proofs, and withdrawals are initiated by relayers acting as third parties. No one knows the transfer records between your addresses except yourself.

## Features
- **Divisible deposits**. A deposit can be split into multiple deposits.
- **Lower fees**. Only a flat fee and gas fee will be charged. That's mean the fee charged for withdrawing 100USDC and 10000USDC is the same.
- **Faster withdrawals**. You can withdraw your fund immediately without a long background process once deposit.

## Installation
```console
yarn
yarn build
```

## Learn more
[Documentation](https://docs.riemann.cash)

## Bug Bounty
Please report any security issues you find through [security@riemann.cash](mailto:security@riemann.cash)

### Donate
If you liked this project, consider donating to support it ❤️

[0xD3633f7afa350Ed73c7C51A496738f2CB1a1670e](https://polygonscan.com/address/0xD3633f7afa350Ed73c7C51A496738f2CB1a1670e)(Polygon)

## Reference
[openzeppelin-contracts](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [IERC20.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol)
- [ReentrancyGuard.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/security/ReentrancyGuard.sol)

[incremental merkle tree](https://github.com/privacy-scaling-explorations/zk-kit/tree/main/packages/incremental-merkle-tree.sol)
- [IncrementalBinaryTree.sol](https://github.com/privacy-scaling-explorations/zk-kit/blob/main/packages/incremental-merkle-tree.sol/contracts/IncrementalBinaryTree.sol)

[circomlibjs](https://github.com/iden3/circomlibjs)
- [poseidon_opt.js](https://github.com/iden3/circomlibjs/blob/main/src/poseidon_opt.js)
- [poseidon_gencontract.js](https://github.com/iden3/circomlibjs/blob/main/src/poseidon_gencontract.js)

[snarkjs](https://github.com/iden3/snarkjs)

## LICENSE
Riemann Contracts is released under the [MIT License](LICENSE).

Copyright ©2022-2029 [RiemannCash](https://github.com/RiemannCash)
