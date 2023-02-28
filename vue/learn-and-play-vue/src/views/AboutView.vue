<script setup>
import { useLanguage } from "@/composables/useLanguage.js";
const { current, set, reset } = useLanguage();

function print() {
  console.log("Current language:", current.value.locale);

  current.value.locale = "hej";
}
</script>

<template>
  <div class="card">
    <input ref="lng" />
    <button @click="set($refs.lng.value)">change language</button>
    <h2>Current language: {{ current.locale }}</h2>
    <button @click="print()">console status</button>
    <button @click="reset()">reset language</button>
  </div>
</template>

<style scoped>
.card {
  border: 2px solid lightgray;
  border-radius: 6px;
  max-width: 500px;
  margin: 10px auto 0 auto;
  text-align: center;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgb(211, 211, 211, 0.6);
}
</style>
