const path = require('path');
const fs = require('fs');
const solc = require('solc');

const LotteryPath = path.resolve(__dirname,'contracts','Lottery.sol');
const source = fs.readFileSync(LotteryPath, 'utf8');
//console.log(source);
try{
console.log(solc.compile(source,1));
} catch(e) {
console.log(e);
}
//module.exports = solc.compile(source,1).contracts[':Lottery'];