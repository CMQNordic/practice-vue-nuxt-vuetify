<script setup>
const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Flex",
    path: "/flex",
  },
  {
    title: "Classes",
    path: "/classes",
  },
];
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink v-for="link in links" :key="link.title" :to="link.path">
          {{ link.title }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  background-color: lightgray;
}

nav {
  width: 100%;
  font-size: 1, 5rem;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
