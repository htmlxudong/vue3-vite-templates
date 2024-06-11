/** @type {import('tailwindcss').Config} */
export default {
	corePlugins: {
		preflight: false //禁用 Tailwind 的全局基本样式，
		//而不影响那些依靠添加自己的基本样式来正常工作的 utilities。
	},
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	theme: {
		extend: {}
	},
	plugins: []
};
