export type PromiseData<T = {}[]> = Promise<AllDataRes<T>>;

// 接口定义对象

interface AllDataRes<T> {
  code: number;
  msg: string;
  data: T;
}

export interface PageResDataType {
  list: Record<string, any>[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

export interface InfoRes {
  menus: [];
}

export interface ParamsItf {
  keyword: string;
  pageNum: number;
  pageSize: number;
}

export interface AdminObjItf {
  username?: string;
  nickName?: string;
  email?: string;
  password?: string;
  note?: string;
  status?: number;
  id?: number;
}
