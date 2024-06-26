/**
 * @description：常用的 contentTyp 类型
 */
export const ContentTypeEnum = {
	// json
	JSON: "application/json;charset=UTF-8",
	// text
	TEXT: "text/plain;charset=UTF-8",
	// form-data 一般配合qs
	FORM_URLENCODED: "application/x-www-form-urlencoded;charset=UTF-8",
	// form-data 上传
	FORM_DATA: "multipart/form-data;charset=UTF-8"
};
/**
 * @description：请求方法
 */
export const RequestEnum = {
	GET: "GET",
	POST: "POST",
	PATCH: "PATCH",
	PUT: "PUT",
	DELETE: "DELETE"
};

export const ResultEnum = {
	SUCCESS: 200,
	ERROR: 500,
	OVERDUE: 401,
	TIMEOUT: 5000,
	TYPE: "success"
};
