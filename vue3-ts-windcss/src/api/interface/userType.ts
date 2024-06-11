import { PageResDataType } from "./type";

interface LoginDataType {}

export interface LoginRes {
  expiresAt: number;
  secret: string;
  user: Record<string, any>;
  token: string;
}
export interface ForgetPwdRes {
  data: string;
}
export interface GetVertifyCodeRes {
  data: string;
}

export interface GetMenusType {
  menus: [];
  data: string;
}
