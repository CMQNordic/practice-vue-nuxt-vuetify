<template>
  <div class="section2">
    <h1>This is section 2</h1>
    <Assignment1 />
    <Assignment2 />
    <Assignment3 />
    <Assignment4 />
  </div>
</template>

<script>
import Assignment1 from "../components/Assignment1"
import Assignment2 from "../components/Assignment2"
import Assignment3 from "../components/Assignment3"
import Assignment4 from "../components/Assignment4"

export default {
  name: 'Section2 Component',
  components: {
    Assignment1,
    Assignment2,
    Assignment3,
    Assignment4
  }

}
</script>