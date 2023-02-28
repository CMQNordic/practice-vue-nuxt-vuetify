<script setup>
import TheBox from "@/components/TheBox.vue";
</script>

<template>
  <the-box right color="blue"> HI </the-box>

  <the-box centered color="red">
    TEXT CENTERED 
    <the-box right color="green">
      TEXT right
      <the-box left color="blue"> TEXT RIGHT </the-box>
    </the-box>
  </the-box>
</template>
