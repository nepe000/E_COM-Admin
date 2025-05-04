/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/axios/api.axios";
import { ILogin } from "@/interface/auth/auth.interface";

export const adminLogin = async (data: ILogin) => {
  try {
    console.log("loginadmin", data);
    const response = await api.post("/user/admin/login", data); //?end point , data
    console.log(response);

    return response.data;
  } catch (err: any) {
    throw err?.response?.data;
  }
};
