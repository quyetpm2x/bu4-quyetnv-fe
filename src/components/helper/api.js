'use strict'
import axios from "axios";
import { axiosInstance, headers } from "./config";

export const getIssuer = async () => {
    const response = await axiosInstance.get('/issuers');
    return response.data;
}

export const updateWallet = async (wallet) => {
    const response = await axiosInstance.patch('/issuers', {owner: wallet});
    return response.data;
}

export const updateContractAddress = async (contractAddress) => {
    const response = await axiosInstance.patch('/issuers', {contractAddress: contractAddress});
    return response.data;
}

export const updateDeployTransaction = async (contractAddress, transactionHash, block) => {
    const response = await axiosInstance.post('/transactions', {
        hash: transactionHash,
        contractAddress: contractAddress,
        block: block,
        action: 3,
    })
    return response.data;
}

export const getHistory = async () => {
    const response = await axiosInstance.get('/transactions/list');
    return response.data;
}

export const getBatches = async () => {
    const response = await axiosInstance.get('/certs/batches');
    return response.data;
}


