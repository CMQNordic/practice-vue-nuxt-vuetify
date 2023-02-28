<script setup>
import DefaultLayout from "./DefaultLayout.vue";
// add more layouts here

const props = defineProps({
  name: String,
});

console.log(`> Used layout: ${props.name}`);
</script>

<template>
  <DefaultLayout>
    <slot />
  </DefaultLayout>
</template>
