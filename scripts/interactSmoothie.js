// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
const CONTRACT_ADDRESS = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

const ContractABI = require("../artifacts/contracts/UkrainianSmoothie.sol/UkrainianSmoothie.json");

// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// 0x5FbDB2315678afecb367f032d93F642f64180aa3

// provider - Alchemy
// const provider = new ethers.providers.alchemyProvider(network="localhost", API_KEY);
const provider = new ethers.providers.JsonRpcProvider();
// const provider = new ethers.providers.JsonRpcProvider("https://data-seed-prebsc-1-s1.binance.org:8545")
// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, provider);
console.log('ssss', CONTRACT_ADDRESS);
// contract instance
const contract = new ethers.Contract(CONTRACT_ADDRESS, ContractABI.abi, signer);
signer.provider.getCode(CONTRACT_ADDRESS)

const printBalance = async () => {
    const balance = await contract.getBalance();
    console.log("The balance is: " + balance.toString());
}
const withdrawBalance = async () => {
    const res = await contract.withdraw();
    console.log("The res is: " + res.toString());
}
const totalSupply = async () => {
    const res = await contract.totalSupply();
    console.log("The total supply is: " + res.toString());
}
const tokenOfOwnerByIndex = async (owner, index) => {
    const res = await contract.tokenOfOwnerByIndex(owner, index);
    console.log(`The tokenOfOwnerByIndex is: ` + res.toString());
}
const ownerOftokenByIndex = async (index) => {
    const res = await contract.tokenByIndex(index);
    console.log(`The tokenByIndex of ${index} is: ` + res.toString());
}
const ownerOf = async (index) => {
    const res = await contract.ownerOf(index);
    console.log(`The ownerOf of ${index} is: ` + res.toString());
}
const toggleActive = async () => {
    const res = await contract.toggleActive();
    console.log(`The response of toggleActive is: ` + res.toString());
}
const printActive = async () => {
    const active = await contract.active();
    console.log("The active response is: " + active);
}
const tokenURI = async (id) => {
    const token = await contract.tokenURI(id);
    console.log("The tokenURI  is: " + token);
}
const setBaseURI = async (uri) => {
    const res = await contract.setBaseURI(uri);
    console.log("The response  is: " + res);
}
async function main() {
    printBalance();
    withdrawBalance();
    // printBalance();
    // totalSupply();
    // printActive();
    // toggleActive();
    // tokenURI(22);
    // setBaseURI("https://www.ukrainewartime.art/smoothie/json/");
}

main();