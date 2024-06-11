import { notification } from "ant-design-vue";

export const useNotification = (config = { duration: 2.5 }) => {
	const Notification = ({ code, msg }) => {
		switch (code) {
			case 200:
				notification["success"]({
					message: "系统通知",
					description: msg,
					...config
				});
				break;
			case 400:
				notification["warning"]({
					message: "系统通知",
					description: msg,
					...config
				});
				break;
			default:
				notification["info"]({
					message: "系统通知",
					description: msg,
					...config
				});
		}
	};

	return {
		Notification
	};
};
