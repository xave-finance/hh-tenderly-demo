import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    tenderly: {
      url: `https://rpc.tenderly.co/fork/${process.env.TENDERLY_FORK_ID}`,
    },
  },
};

export default config;
