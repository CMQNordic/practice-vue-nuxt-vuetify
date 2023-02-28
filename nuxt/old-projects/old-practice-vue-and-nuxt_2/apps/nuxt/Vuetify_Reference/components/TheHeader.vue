<template>
  <!-- clipped-left: Sets <v-navigation-drawer> (side navigation) positioned below/left of <v-app-bar>. -->
  <!-- dense: Reduces the height of this element to 48px. -->
  <!-- fixed: This element stay in the same place even if the page is scrolled. -->
  <!-- app: Part of the application layout. When used, element must reside outside of <v-main> to function properly. Applies position: fixed to the layout element -->
  <header>
    <v-app-bar
               clipped-left
               clipped-right
               outlined
               dense
               fixed
               app>

      <!-- Content to left  -->
      <v-toolbar-title class="display-1">CMQ Nordic AB</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- Content to right -->
      <v-toolbar-title>Vuetify - Reference & Cheatsheet</v-toolbar-title>

      <!-- Button that toggles right navigation -->
      <v-btn icon @click="handleOnClick">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

    </v-app-bar>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    handleOnClick(event) {
      this.$emit('leftToggle', event)
    }
  }
}
</script>

<style lang="postcss" scoped>
</style>
