import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/home",
			name: "home",
			component: () => import("@/views/Home.vue")
		},
		{
			path: "/",
			redirect: "/home"
		}
	],
	scrollBehavior() {
		return { top: 0 };
	}
});

/**
 * @description 路由跳转错误
 * */
router.onError(error => {
	console.warn("路由错误", error.message);
});

export default router;
