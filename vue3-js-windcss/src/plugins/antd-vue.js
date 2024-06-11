import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

export const antdPlugin = {
	install: function (app) {
		app.use(Antd);
	}
};

export default antdPlugin;
