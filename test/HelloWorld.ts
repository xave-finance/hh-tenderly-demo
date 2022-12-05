import { ethers } from "hardhat";

describe("HelloWorld", function () {
  describe("Greet", function () {
    it("It should print out a greeting in the terminal", async function () {
      const HelloWorld = await ethers.getContractFactory("HelloWorld");
      const helloWorld = await HelloWorld.deploy();
      helloWorld.greet();
    });
  });
});
