import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  // We are in the browser and metamask is running
  web3 = new Web3(window.web3.currentProvider);
}else{
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/471e487734fb41b08fc3af164e2f6f9f'
  );
  web3 = new Web3(provider);
}
web3.eth.handleRevert = true;
export default web3;