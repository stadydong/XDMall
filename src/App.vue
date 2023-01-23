<template>
	<div class="app h-full">
		<router-view></router-view>
	</div>
</template>
<script>
export default {
	data() {
		return {}
	},
	created(){
		this.$store.dispatch("GetCarList")
	}
}
</script>
<style>
html,
body {
	width: 100%;
	height: 100%;
}
</style>
