<script setup>
import zhCN from "ant-design-vue/es/locale/zh_CN";
import Layout from "./layout/Index.vue";
</script>

<template>
	<a-config-provider :locale="zhCN">
		<Layout />
	</a-config-provider>
</template>
