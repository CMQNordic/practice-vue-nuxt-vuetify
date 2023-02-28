<template>
   <div class="app-header">
      <!-- <div class="app-branding">
         <router-link to="#">
            <img src="@/assets/images/logo/logo.png" width="80" />
            <span> Branding text </span>
         </router-link>
      </div> -->

      <nav class="app-navigation">
         <!-- menu -->
         <ul>
            <li><a href="./index2.html">A link</a></li>
            <!-- <li><router-link to="../html/index.html">router link</router-link></li> -->
         </ul>
      </nav>
   </div>
</template>

<script>
export default {
   data() {
      return {
         name: null
      };
   },
   methods: {
      buttonClicked(event) {
         console.log(event);
         this.name = 'Martin';
      }
   }
};
</script>

<style scoped>
.app-header {
   background-color: red;
}
</style>
