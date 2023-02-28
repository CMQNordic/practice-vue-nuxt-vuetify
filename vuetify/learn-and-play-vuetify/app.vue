<template>
	<NuxtLayout :name="layout">
		<!-- <button @click="toggleLayout">CHANGE LAYOUT</button> -->
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
const layout = ref('vuetify');

function toggleLayout() {
	layout.value = layout.value == 'default' ? 'vuetify' : 'default';

	console.log(`➡️ Changing layout to ${layout.value}`);
}
</script>

