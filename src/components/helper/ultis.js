import { getIssuer, updateWallet } from './api';
import Web3 from 'web3';

export const connectMetaMask = async () => {
   if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
    const accounts = await window.web3.eth.getAccounts();
    const issuer = await getIssuer();
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
  }
};

export const isWalletRegisted = async () => {
    const issuer = await getIssuer();
    return issuer.owner;
}
