<template>
   <div class="app-container A">
      <header class="menu__nav B">
         <span>The header</span>
         <div>
            <NuxtLink class="menu__item" to="/">Home</NuxtLink>
            <NuxtLink class="menu__item" to="/layouts">Layouts</NuxtLink>
            <NuxtLink class="menu__item" to="/typography">Typography</NuxtLink>
         </div>
      </header>

      <main class="wrapper--stretched bD">
         <slot />
      </main>

      <footer class="B">The footer</footer>
   </div>
</template>

<style scoped>
.app-container {
   /* Fill up the whole screen to stretch childred */
   height: 100vh;
   display: flex;
   flex-direction: column;

   margin: 0 10%;
}

.wrapper--stretched {
   /* Fill up all remaning space */
   flex: 1;
}

.menu__nav {
   display: flex;
   justify-content: space-between;
}
.menu__item {
   padding-left: 10px;
   padding-right: 10px;
}
</style>
