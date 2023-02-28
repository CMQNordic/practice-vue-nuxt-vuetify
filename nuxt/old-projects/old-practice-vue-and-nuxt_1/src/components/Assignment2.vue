<template>
  <div>
    <h2>Assignment 2</h2>
    <hr>
    <p>Events • @click • @keydown • @keyup.enter="confirmInput($event.target.value) • alert()</p>
    <hr>
    <section id="assignment">
      <p>1. Show an alert when the button is pressed </p>
      <button @click="showAlert()">Show Alert</button>

      <p>2. Register the user input on "keydown" and output it in the paragraph (hint: event.target.value) </p>
      <input type="text" @keydown="saveInput($event)" />
      <p>{{userInput}}</p>

      <p>3. Repeat 2) but only output the entered value if the ENTER key was pressed (hint: @click.enter)</p>
      <input type="text" @keydown="saveInput($event)" @keyup.enter="confirmInput()" />
      <p>{{confirmedInput}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Assignment3 component',
  data() {
    return {
      userInput: null,
      confirmedInput: null
    }
  },
  methods: {
    showAlert() {
      alert('Clicked!')
    },
    saveInput(e) {
      this.userInput = e.target.value
    },
    confirmInput() {
      this.confirmedInput = this.userInput
    }
  }
}
</script>