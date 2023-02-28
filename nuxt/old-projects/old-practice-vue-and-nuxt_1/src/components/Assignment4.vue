<template>
  <div>
    <h2>Assignment 4</h2>
    <hr>
    <section id="assignment">
      <h3>Fetch the user input and use it as a CSS class</h3>
      <h3>The entered class should be added to the below paragraph</h3>
      <h3>2. Use the "visible" and "hidden" classes to show/ hide the above paragraph</h3>
      <h3>Clicking the button should toggle between the two options</h3>
      <label>Define class: user1 or user2. </label>
      <input type="text" @input="className = $event.target.value">
      <button @click="isHidden = !isHidden">TOGGLE VISIBILTY</button>
      <p :class="dynamicClass">STYLED with class: {{ className }}</p>

      <h3>3. Add dynamic inline styling to the below paragraph and let the user enter a background-color</h3>
      <label>Define a color i.e. red. </label><input v-model="color">
      <p :style="{backgroundColor: color}">Styled with color={{ color }}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Assignment4 component',
  data() {
    return {
      className: '',
      color: '',
      isHidden: false
    }
  },
  computed: {
    dynamicClass() {
      return {
        user1: this.className === 'user1',
        user2: this.className === 'user2',
        visible: !this.isHidden,
        hidden: this.isHidden
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

<style scoped>
.user1 {
  background-color: blue;
  color: white;
}
.user2 {
  background-color: purple;
  color: white;
}
.hidden {
  display: none;
}
.visible {
  display: block;
}
</style>
