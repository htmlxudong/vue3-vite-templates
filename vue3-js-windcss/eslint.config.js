import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

export default [
	{ languageOptions: { globals: { ...globals.browser, ...globals.node } } },
	pluginJs.configs.recommended,
	...pluginVue.configs["flat/essential"],
	{
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "off",
			"vue/multi-word-component-names": "off"
		}
	},
	{
		ignores: ["node_modules/*", ".git/", "dist/*"]
	}
];
