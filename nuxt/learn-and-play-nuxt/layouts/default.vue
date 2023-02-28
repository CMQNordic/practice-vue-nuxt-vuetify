<template>
   <div class="site-container">
      <TheHeader />
      <div class="page-container">
         <slot />
      </div>
      <TheFooter />
   </div>
</template>

<style>
.site-container {
   /* Fill up the whole screen */
   min-height: 100vh;
   width: 100%;

   /* We use flex for "forward" height to children to stretch nicely" */
   display: flex;
   flex-direction: column;
   background-color: lightblue;
}

.page-container {
   /* stretch this child to full height of parent  */
   flex-grow: 1;
}
</style>
