<template>
   <div class="title">
      <h1>Course title</h1>
   </div>
   <div class="container">
      <aside class="menu__container">
         <nav>
            <h3>Current Lesson</h3>
         </nav>
      </aside>
      <div class="lesson__container">
         <NuxtPage />
      </div>
   </div>
</template>

<style scoped>
.title {
   text-align: center;
}
.container {
   display: flex;
}
</style>
