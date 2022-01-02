import { getIssuer, updateWallet } from './api';
import Web3 from 'web3';
import { FactoryAbi } from '../../abis/Factory';

export const connectMetaMask = async () => {
   if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    const accounts = await window.web3.eth.getAccounts();
    const issuer = await getIssuer();
    console.log(issuer);
    if (issuer.owner && issuer.owner.toLowerCase() === accounts[0].toLowerCase()) {
      return accounts[0];
    }
  }
};

export const registWallet = async () => {
  if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    const accounts = await window.web3.eth.getAccounts();
    await updateWallet(accounts[0]);
    return accounts[0];
  }
};

export const isWalletRegisted = async () => {
    const issuer = await getIssuer();
    return issuer.owner;
}

export const deployDocumentStore = async (publicKey) => {
    window.web3 = new Web3(window.web3.currentProvider);
    const documentFactory = new window.web3.eth.Contract(FactoryAbi, "0x9f4FAB7188468e1da901Fc3c8cFa7a8911f37d7D");
    const newStore = await documentFactory.methods.deploy('HUST').call({ from: publicKey });
    await documentFactory.methods.deploy('HUST').send({ from: publicKey });
    console.log(newStore);
    return newStore;
  };

