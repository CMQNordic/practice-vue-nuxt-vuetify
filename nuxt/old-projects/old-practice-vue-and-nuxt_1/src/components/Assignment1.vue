<template>
  <div>
    <h2>Assignment 1</h2>
    <hr>
    <p> methods: • v-bind:[html-attribute]="..." (:) • v-on:input="v=$event.target.value" (@) • Math.Random() • v-model </p>
    <hr>
    <section id="assignment">
      <p>1) Output your name (interpallation text): {{ name }} </p>
      <p>2) Output your age (interpollation number): {{ age }} </p>
      <p>3) Output your age + 5 (method, interpollation calculation): {{ calculateAge() }} or {{ age + 5 }}</p>
      <p>4) Output a random number (0 to 1) (method, interpollation function): {{ randomNumber() }} or {{ Math.random() }}</p>
      <p>5) Display some image you found via Google (one way binding, v-bind):</p>
      <div>
        <img :src="webAddress" width="50" height="50" />
      </div>
      <p>6) Prepopulate the input field with your name via the "value" attribute. (v-bind, v-model)</p><br>
      <label>two way. in. out. (v-model)</label><input v-model="name" /><br>
      <label>one way. out. (@input)</label><input @input="name=$event.target.value" /><br>
      <label>one way. in. (:value)</label><input :value="name" />

      <p>{{name}}</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Assignment1 component',
  data() {
    return {
      name: 'Martin',
      age: 43,
      webAddress: 'https://www.pinclipart.com/picdir/big/129-1293021_check-mark-sfw-check-mark-small-icon-clipart.png',
      defaultText: 'Martin',
    }
  },
  methods: {
    calculateAge() {
      return this.age + 5
    },
    randomNumber() {
      return Math.random()
    }
  }
}
</script>