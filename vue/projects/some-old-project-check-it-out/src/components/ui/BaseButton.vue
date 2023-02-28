<template>
   <button class="BaseButton" :type="type" :class="{ 'BaseButton---flat': mode === 'flat' ? true : false }">
      <slot> </slot>
      <diva></diva>
   </button>
</template>

<script>
export default {
   props: {
      type: {
         type: String,
         required: false,
         default: 'button' // buttin, submit or reset
      },
      mode: {
         type: String,
         required: false,
         default: null // flat
      }
   }
};
</script>

<style>
.BaseButton {
   background-color: rgb(155, 182, 255);
   font-size: 1rem;
   font-weight: 600;
   padding: 0.4rem 0.75rem;
   border: thin solid gray;
   border-radius: 0.4rem;
   color: black;
   cursor: pointer;
}

.BaseButton:hover,
.BaseButton:active {
   background-color: #ce5c00;
   color: black;
}

.BaseButton---flat {
   background-color: inherit;
   color: #ce5c00;
   border: none;
}

.BaseButton:hover,
.BaseButton:active {
   background-color: inherit;
   color: black;
}
</style>
