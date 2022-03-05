// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const contract = require("../artifacts/contracts/MiroslavasCreatures.sol/MiroslavasCreatures.json");

// provider - Alchemy
// const provider = new ethers.providers.alchemyProvider(network="localhost", API_KEY);
const provider = new ethers.providers.JsonRpcProvider();

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, provider);

// contract instance
const creatures = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

const printBalance = async () => {
    const balance = await creatures.getBalance();
    console.log("The balance is: " + balance.toString());
}
const withdrawBalance = async () => {
    const res = await creatures.withdraw();
    console.log("The res is: " + res.toString());
}
const totalSupply = async () => {
    const res = await creatures.totalSupply();
    console.log("The total supply is: " + res.toString());
}
const tokenOfOwnerByIndex = async (owner, index) => {
    const res = await creatures.tokenOfOwnerByIndex(owner, index);
    console.log(`The tokenOfOwnerByIndex is: ` + res.toString());
}
const ownerOftokenByIndex = async (index) => {
    const res = await creatures.tokenByIndex(index);
    console.log(`The tokenByIndex of ${index} is: ` + res.toString());
}
const ownerOf = async (index) => {
    const res = await creatures.ownerOf(index);
    console.log(`The ownerOf of ${index} is: ` + res.toString());
}
const toggleActive = async () => {
    const res = await creatures.toggleActive();
    console.log(`The response of toggleActive is: ` + res.toString());
}
const printActive = async () => {
    const active = await creatures.active();
    console.log("The active response is: " + active);
}
async function main() {
    printBalance();
    // withdrawBalance();
    // printBalance();
    // totalSupply();
    printActive()
    // toggleActive();
}

main();