<template>
	<div class="wrapper text-red-200">Home</div>
	<a-button @click="consoleLog">打印</a-button>
</template>

<script setup>
const a = ref("");
const consoleLog = () => {
	a.value = "";
};
</script>
	
<style lang="scss" scoped></style>
