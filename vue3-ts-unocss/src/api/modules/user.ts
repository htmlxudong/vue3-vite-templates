import request from "../request";
import {
  LoginRes,
  ForgetPwdRes,
  GetVertifyCodeRes,
} from "../interface/userType";
import { PromiseData } from "../interface/type";
export const loginApi = (data: Record<string, any>): PromiseData<LoginRes> =>
  request.post("/sys-base/login", data);

export const forgetPwdApi = (
  data: Record<string, any> = {}
): PromiseData<LoginRes> => request.post("/sys-base/forget-pwd", data);

export const changePwdApi = (
  data: Record<string, any> = {}
): PromiseData<ForgetPwdRes> => request.post("/sys-base/change-pwd", data);

export const getVertifyCode = (
  data: Record<string, any> = {}
): PromiseData<GetVertifyCodeRes> => request.post("/sys-base/send-code", data);


export const getMenusApi = (
  data: Record<string, any> = {}
): PromiseData<GetMenusType> => request.post("/sys-base/permission/get", data);


export const logoutApi = (): PromiseData<ForgetPwdRes> =>
  request.post("/sys-base/logout", {});
