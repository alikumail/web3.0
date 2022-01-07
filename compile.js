const path = require('path');
const fs = require('fs');
const solc = require('solc');

//const LotteryPath = path.resolve(__dirname, 'contracts','Lottery.sol');
//const source = fs.readFileSync(LotteryPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
      'Lottery.sol': {
        content: 'contract C { function f() public { } }'
      }
    },
    settings: {
      outputSelection: {
        '*': {
          '*': ['*']
        }
      }
    }
  };
  
var output = JSON.parse(solc.compile(JSON.stringify(input)));

for (var contractName in output.contracts['Lottery.sol']) {
    console.log(
      contractName +
        ': ' +
        output.contracts['Lottery.sol'][contractName].evm.bytecode.object
    );
  }