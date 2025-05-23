/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";

export const getAllProducts = async () => {
  try {
    const response = await api.get("/product");
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getTrendingProducts = async () => {
  try {
    const response = await api.get("/product");
    console.log(response);
    return response;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const getProductsById = async (id: string) => {
  try {
    const response = await api.get(`/product/${id}`);
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const createProduct = async (data: any) => {
  try {
    const response = await api.post(`/product`, data);
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await api.delete(`/product/${id}`);
    return response?.data;
  } catch (error: any) {
    throw error?.response?.data;
  }
};
