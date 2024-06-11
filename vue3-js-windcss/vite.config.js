import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import eslintPlugin from "vite-plugin-eslint";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		vueJsx(),
		eslintPlugin(),
		// 自动导入 vue api
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],
			imports: ["vue"]
		})
	],
	server: {
		host: "0.0.0.0",
		port: 8888,
		open: true
	},
	resolve: {
		alias: {
			"@": resolve(__dirname, "./src")
		}
	}
});
