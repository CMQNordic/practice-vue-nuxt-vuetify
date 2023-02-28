<template>
   <header>
      <div>TheHeader.vue</div>
      <div>
         <label>Id:</label><input v-model="id" />
         <div class="links">
            <span>Declarative navigation: </span>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/users">All Users</NuxtLink>
            <NuxtLink :to="`/users/${id}`">One User</NuxtLink>
            <NuxtLink :to="`/users/${id}/details`">One User Details</NuxtLink>
         </div>
         <div>
            <span>programmatic navigation: </span>
            <button @click="navigateTo(`/`)">Home</button>
            <button @click="navigateTo(`/users`)">All Users</button>
            <button @click="load(`/users/${id}`)">One User</button>
            <button @click="$router.push(`/users/${id}/details`)">One User Details</button>
         </div>
      </div>
   </header>
</template>

<script setup>
const id = ref('');
function load(path) {
   navigateTo(path);
   // useNuxtApp().$router.push(path) // same
}
</script>

<style scoped>
header {
   background-color: lightgray;
   display: flex;
   justify-content: space-between;
}
.links * {
   margin-right: 10px; /* select all elements of a class */
}
</style>
