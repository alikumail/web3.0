import web3 from './web3.js';
const address = '0xeeb3d54BAff30C9D51FE8437664C77c06d01ae9b';
const abi = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"participants","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWinner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"enterLottery","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
/*
const abi =[
    {
      inputs: [],
      name: 'f',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ];*/
export default new web3.eth.Contract(abi,address);