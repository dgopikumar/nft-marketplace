require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "ffa131ed6434481680d91668ecb09252"

module.exports = {
  networks: {
    hardhat: {
      chainId:1337
    },
    mumbai: {
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts: [privateKey]
    }
  },
  solidity: "0.8.4",
};
