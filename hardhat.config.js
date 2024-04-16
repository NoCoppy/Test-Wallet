require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    bsctest: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      accounts: [process.env.PRIV_KEY]
    }
  }
};