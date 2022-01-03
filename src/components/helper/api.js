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


