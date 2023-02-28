<template>
   <NuxtLayout> </NuxtLayout>
   <h1>Error</h1>
   <p>It looks like something went wrong...</p>
   <p>
      <strong>{{ error.message }}</strong>
   </p>
   <button @click="handleError">Home</button>
</template>

<script setup>
const props = defineProps({
   error: Object,
});

const handleError = () => clearError({ redirect: '/' });
</script>
