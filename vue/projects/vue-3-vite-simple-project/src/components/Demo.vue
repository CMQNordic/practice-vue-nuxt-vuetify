<script setup>
	import * as logs from '@/utilities/log.js';

	// Only using one function, but Vite Treeshaking automatically shakes off unused.
	logs.usedLog();
	// logs.unusedLog1();
	// logs.unusedLog2();
</script>

<template>
	<div class="used-centered">
		<div>I'm default (red)</div>
		<div class="used-blue-text">I'm blue</div>
		<div class="used-green-text">I'm green</div>
		<div style="color: var(--USED-YELLOW)">I'm yellow</div>
	</div>
</template>

<style scoped>
	.unused-class-3 {
		color: black;
	}
</style>
