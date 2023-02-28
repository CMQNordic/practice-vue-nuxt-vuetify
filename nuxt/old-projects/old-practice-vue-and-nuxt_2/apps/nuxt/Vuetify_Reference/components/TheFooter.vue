<template>
  <v-footer :absolute="!fixed" app>
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<script>
export default {
  name: 'TheFooter',
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
