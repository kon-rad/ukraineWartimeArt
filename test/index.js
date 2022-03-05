import { expect } from "chai";
import { ethers } from "hardhat";

describe("MiroslavasCreatures", function () {
  it("Should return the new greeting once it's changed", async function () {
    const MiroslavasCreatures = await ethers.getContractFactory("MiroslavasCreatures");
    const miroslavasCreatures = await MiroslavasCreatures.deploy("Hello, world!");
    await miroslavasCreatures.deployed();

    expect(await MiroslavasCreatures.greet()).to.equal("Hello, world!");

    const setGreetingTx = await MiroslavasCreatures.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await MiroslavasCreatures.greet()).to.equal("Hola, mundo!");
  });
});
