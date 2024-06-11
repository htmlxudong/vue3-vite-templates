import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
	state: () => {
		return {
			isCollapse: false,
			routes: [],
			reportManagementTabs: "recruitmentReports",
			selectedKeys: []
		};
	},
	actions: {
		updateIsCollapse() {
			this.isCollapse = !this.isCollapse;
		}
	},
	persist: {
		key: "global",
		storage: sessionStorage
	}
});
