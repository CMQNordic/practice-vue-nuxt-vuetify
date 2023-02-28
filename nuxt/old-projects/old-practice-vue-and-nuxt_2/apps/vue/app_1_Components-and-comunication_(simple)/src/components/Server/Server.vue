<template>
  <li
    style="cursor: pointer"
    @click="selected()"
    :class="{selected: isSelected}"
  >#{{ server.id }} {{ server.status }}</li>
</template>

<script>
import { serverEventBus } from "../../main";

export default {
  props: {
    server: Object
  },
  data: function() {
    return {
      isSelected: false
    };
  },
  methods: {
    selected() {
      this.isSelected = true;
      // Send the event on the bus
      serverEventBus.$emit("serverSelected", this.server);
    }
  },
  // life-cycle hook
  created() {
    // set up listener with handler function
    serverEventBus.$on("serverSelected", server => {
      // do not reset to false if event trigged by usself
      if (server.id != this.server.id) {
        this.isSelected = false;
      }
    });
  }
};
</script>

<style scoped>
.selected {
  background-color: lightgray;
}
</style>

