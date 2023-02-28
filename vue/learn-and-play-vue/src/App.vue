<template>
  <AppLayout :name="layout">
    <RouterView />
  </AppLayout>
</template>

<script setup>
import AppLayout from "./layouts/AppLayout.vue";

const layout = "DefaultLayout";

console.log(`> Starting App`);
</script>
