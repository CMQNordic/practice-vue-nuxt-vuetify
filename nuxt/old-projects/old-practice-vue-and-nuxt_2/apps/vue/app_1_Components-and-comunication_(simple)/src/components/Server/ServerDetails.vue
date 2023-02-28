<template>
  <div class="col-xs-12 col-sm-6">
    <h3>{{server == null?'Select a server':'Server status'}}</h3>
    <template v-if="server != null">
      <p>#{{ server.id }} {{server.status}}</p>
      <hr />
      <span>New status:</span>
      <input v-model="statusAsText" />
      <button @click="resetServer()">Set status</button>
    </template>
  </div>
</template>

<script>
import { serverEventBus } from "../../main";

export default {
  // life-cycle hook
  data: function() {
    return {
      statusAsText: null,
      server: null
    };
  },
  created() {
    serverEventBus.$on("serverSelected", server => {
      this.server = server;
      this.statusAsText=null;
    });
  },
  methods: {
    resetServer() {
      if (this.statusAsText != null) {
        this.server.status = this.statusAsText;
      } else {
        alert("Please. Write new status to set");
      }
    }
  }
};
</script>

<style>
</style>