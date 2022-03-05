
// run this in hardhat console

const ethers = require('ethers');
const MC = require('./artifacts/contracts/MiroslavasCreatures.sol/MiroslavasCreatures.json');

const provider = new ethers.providers.JsonRpcProvider();
const mc = new ethers.Contract("0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0", MC.abi, provider);

// check balance

let b = await mc.getBalance();
// 150 000 000 000 000 000 000
// web3.utils.fromWei(props.data.price.toString(), 'ether')
let w = await mc.withdraw();
