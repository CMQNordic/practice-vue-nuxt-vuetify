<template>
   <div class="wrapper">
      <button @click="buttonClicked">
         <p>PRESS <span>ME</span></p>
      </button>
      <span>{{ name }}</span>
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
.wrapper {
   display: block;
   background: red;
}
</style>
