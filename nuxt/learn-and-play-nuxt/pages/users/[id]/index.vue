<template>
   <h1>One User page - id {{ $route.params.id }}</h1>
</template>

<script setup>
definePageMeta({
   validate: async route => {
      console.log(`Validation of dynamic route:`, route);
      return /^\d+$/.test(route.params.id); // id only digits?
   },
});
</script>

<style scoped lang="postcss">
h1 {
   color: brown;
}
</style>

<style></style>
