require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
          evmVersion: "istanbul",
        },
      },
    ],
  },
  paths: {
    artifacts: "./build/artifacts",
    cache: "./build/cache",
    sources: "./contracts",
  },
}
