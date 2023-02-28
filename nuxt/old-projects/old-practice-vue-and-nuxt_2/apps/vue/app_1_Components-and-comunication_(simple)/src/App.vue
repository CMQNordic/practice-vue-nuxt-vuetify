<template>
  <div class="container">
    <app-header></app-header>
    <hr />
    <div  class="row" >
      <app-servers></app-servers>
      <app-server-details></app-server-details>
    </div>
    <hr />
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "./Components/Shared/Header.vue";
import Footer from "./Components/Shared/Footer.vue";
import Servers from "./Components/Server/Servers.vue";
import ServerDetails from "./Components/Server/ServerDetails.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-servers": Servers,
    "app-server-details": ServerDetails
  },
  methods: {
    name() {
      
    }
  },
};
</script>

<style>
</style>
