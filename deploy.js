const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface,bytecode} = require('./compile.js');


console.log(interface);
//console.log(interface);
/*
const provider = new HDWalletProvider(
    '#',
    'https://rinkeby.infura.io/v3/471e487734fb41b08fc3af164e2f6f9f'
);

const web3 = new Web3(provider);

const deploy = async () =>{
  const accounts = await web3.eth.getAccounts();
  console.log(accounts);
  console.log('Contract is deployed by the manager with address ', accounts[0]);
 try {
  const result = await new web3.eth.Contract(interface)
  .deploy({data : '0x' + bytecode})
  .send({gas : '2000000', from : accounts[0]});
  console.log('Contract deployed to address', result.options.address);
 } catch (e) {
     console.log(e)
 }

 //0xcB664437E011e436b3fa74d5Eeab5977cAb31B06
//0xeeb3d54BAff30C9D51FE8437664C77c06d01ae9b
}

deploy(); */