<template>
  <div class="container">
    <h3>Parent</h3>
    <button @click="resetAll()">Reset all</button>{{ getAllCounters }}
    <!-- Sending (mutating) counters to children on purpose. Re-render in parent will reset values in children -->
    <!-- By sending callback function resetAll() children can execute in parent -->
    <!-- Children inform about counter changes through "counterChanged" event -->
    <app-click-counter
      :compName="'A'"
      :counter="counterA"
      :resetAllCB="resetAll"
      @counterChanged="counterA = $event"
    >
    </app-click-counter>
    <app-click-counter
      :compName="'B'"
      :counter="counterB"
      :resetAllCB="resetAll"
      @counterChanged="counterB = $event"
    >
    </app-click-counter>
    <app-logs></app-logs>
  </div>
</template>

<script>
import { appEventBus } from './main.js';
import Logs from './components/Logs.vue';
import ClickCounter from './Components/ClickCounter.vue';

export default {
  components: {
    'app-click-counter': ClickCounter,
    'app-logs': Logs,
  },
  data: function () {
    return {
      counterA: 0,
      counterB: 0,
    };
  },
  computed: {
    getAllCounters() {
      return ' Counters: A=' + this.counterA + ' B=' + this.counterB;
    },
  },
  methods: {
    resetAll() {
      this.counterA = 0;
      this.counterB = 0;

      // Send log event on the bus to those who listen
      appEventBus.$emit('logEvent', {
        source: 'Parent',
        text: 'resetAll() executed. All counters set to 0.',
      });
    },
  },
};
</script>

<style>
.container {
  background-color: grey;
  padding: 10px;
}
</style>
