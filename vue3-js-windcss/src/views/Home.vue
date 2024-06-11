<template>
	<div class="wrapper">Home</div>
	<a-button @click="consoleLog">打印</a-button>
</template>

<script setup>

const a = ref("");
const consoleLog = () => {
	a.value = "";
};
</script>

<style lang="scss" scoped></style>
