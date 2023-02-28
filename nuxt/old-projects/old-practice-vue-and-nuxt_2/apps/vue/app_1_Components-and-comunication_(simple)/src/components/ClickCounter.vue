<template>
  <div class="button-counter">
    <h3>Component: {{ compName }}</h3>
    <button @click="increaseCounter(1)">You clicked here {{ counter }} times</button>
    <button @click="increaseCounter(null)">Reset this</button>
    <!-- when clicked call a callback in the parent that resets all counters -->
    <button @click="resetAllCB()">Reset all</button>
    <p v-if="counter > 0">{{  "Counter: " + counter }}</p>
  </div>
</template>

<script>
import { appEventBus } from "../main";

export default {
  props: {
    compName: {
      type: String,
      required: true
    },
    // mutated prop, can be overwriten from parent
    counter: {
      type: Number,
      required: true
    },
    // callback that resets the mutated counter
    resetAllCB: {
      type: Function,
      required: true
    }
  },
  methods: {
    increaseCounter(value) {
      if (value == null) {
        this.counter = 0;
      }
      else {
        this.counter += value;
      }

      // emit an event up to parten informing about counter change
      this.$emit('counterChanged', this.counter);

      // Send log event on the bus to those who listen
      appEventBus.$emit('logEvent', {
        source: this.compName,
        text: 'Counter increased to ' + this.counter
      })
    }
  }
};
</script>

<style>
  .button-counter {
    background-color: beige;
    border: 1px solid black;
    margin: 10px 0;
    padding-left: 10px;
    padding-bottom: 10px;
  }
</style>