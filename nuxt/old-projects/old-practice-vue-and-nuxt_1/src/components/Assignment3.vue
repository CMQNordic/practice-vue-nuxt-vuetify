<template>
  <div>
    <h2>Assignment 3</h2>
    <hr>
    <p></p>
    <hr>
    <section id="assignment">
      <p>1. Connect the input and buttons and calculate a value (a number)</p>
      <p>Show "Not there yet" until you reach an exact result</p>
      <p>Show "Too much!" if the result is greater than an exact result</p>
      <p>2. Watch for changes in "result" and reset the value to 0 after 5 seconds</p>

      <label for="target">Define the target value:</label>
      <input type="text" name="target" v-model="target">
      <button @click="increaseCounter(5)">Add 5 to {{ counter }}</button>
      <button @click="increaseCounter(1)">Add 1 to {{ counter }}</button>
      <button @click="increaseCounter(-counter)">Clear</button>
      <p>Result --> {{ resultString }} </p>

    </section>
  </div>
</template>

<script>
export default {
  name: 'Assignment3 component',
  data() {
    return {
      counter: 0,
      target: 16,
      timeout: false
    }
  },
  watch: {
    timeout(newValue) {
      if (newValue === true) {
        this.counter = 0
      }
    }
  },
  computed: {
    resultString() {
      if (this.counter < this.target) {
        return 'Too low!'
      } else if (this.counter > this.target) {
        return 'Too high!'
      } else {
        return this.counter
      }
    }
  },
  methods: {
    restartTimer() {
      let that = this
      clearTimeout()
      that.timeout = false
      setTimeout(() => {
        that.timeout = true
      }, 5000)
    },
    increaseCounter(val) {
      this.restartTimer()
      this.counter += val
    }
  }
}
</script>
