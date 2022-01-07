const HDwalletProvider = require ('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interfaces , bytecode } = require('./compile.js');

const provider = new HDwalletProvider (
    'resist orbit swap wash hazard burst cat differ apart turn nerve bench',
    'https://rinkeby.infura.io/v3/471e487734fb41b08fc3af164e2f6f9f'
);

const web3 = new Web3 (provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
}

deploy();