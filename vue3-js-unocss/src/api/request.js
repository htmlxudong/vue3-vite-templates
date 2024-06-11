import axios from "axios";
import { checkStatus } from "./config/checkStatus";
import { ResultEnum } from "./config/axios-config";
import { useNotification } from "@/hooks/useNotification";
import { message } from "ant-design-vue";

const { Notification } = useNotification();

const config = {
	baseURL: import.meta.env.VITE_API_URL,
	//baseURL: `${location.origin}/api/`,
	timeout: ResultEnum.TIMEOUT
};

/**
 * @description 创建请求实例
 */
class RequestHttp {
	constructor(config) {
		this.service = axios.create(config);
		this.service.interceptors.request.use(
			config => {
				return {
					...config
				};
			},
			async error => {
				return Promise.reject(error);
			}
		);
		this.service.interceptors.response.use(
			response => {
				// 登陆失效
				// if (data.code == ResultEnum.OVERDUE) {
				// 	userStore.setToken('');
				// 	router.replace(LOGIN_URL);
				// 	ElMessage.error(data.msg);
				// 	return Promise.reject(data);
				// }
				Notification(response.data.code, response.data.msg);
				return response.data;
			},
			async error => {
				//判断status 码
				const { response } = error;
				// 请求超时 && 网络错误单独判断，没有 response
				if (error.message.indexOf("timeout") !== -1) message.error("请求超时！请您稍后重试");
				if (error.message.indexOf("Network Error") !== -1) message.error("网络错误！请您稍后重试");
				// 根据服务器响应的错误状态码，做不同的处理
				if (response) checkStatus(response.status);
				// 服务器结果都没有返回(可能服务器错误可能客户端断网)，断网处理:可以跳转到断网页面
				//if (!window.navigator.onLine) router.replace("/404");
				return Promise.reject(error);
			}
		);
	}

	get(url, params, config = {}) {
		return this.service.get(url, { params, ...config });
	}

	post(url, data = {}, config = {}) {
		return this.service.post(url, data, config);
	}

	put(url, data, config = {}) {
		return this.service.put(url, data, config);
	}

	delete(url, params, config = {}) {
		return this.service.delete(url, { data: params, ...config });
	}
	delete1(url, params, config = {}) {
		return this.service.delete(url, { params, ...config });
	}
	download(url, params, config = {}) {
		// 接收二进制文件流
		return this.service.post(url, params, { ...config, responseType: "blob" });
	}
}

export default new RequestHttp(config);
