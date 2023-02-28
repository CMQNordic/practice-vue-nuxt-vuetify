<template>
  <div :style="styleVariables" class="container-md default-layout-wrapper dbg-container">
    <span class="dbg-infobox">default.vue</span>
    <div class="dbg-floating-switch">
      <b-form-checkbox v-model="debugOn" switch></b-form-checkbox>
    </div>

    <div class="row">
      <div class="col px-0">
        <nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  computed: {
    debugOn: {
      // As we v-model to param in store, we need getter and setter to v-model to work
      get() {
        return this.$store.getters.debugOn
      },
      set(bOn) {
        this.$store.commit('setDebugOn', bOn)
      }
    },
    // Special way of setting variable in <script> to use in <style>
    // Always bind to style in the outter div-elem
    styleVariables() {
      return {
        '--dbg-infobox__display': this.debugOn ? 'block' : 'none',
        '--dbg-wrapper__padding-top': this.debugOn ? '21px' : '',
        '--dbg-wrapper__margin': this.debugOn ? '0 5px 5px 5px' : '',
        '--dbg-wrapper__background-color': this.debugOn ? 'lightgray' : '',
        '--dbg-wrapper__border': this.debugOn ? '1px dotted red' : '',
        '--dbg-wrapper__position': this.debugOn ? 'relative' : ''
      }
    }
  }
}
</script>

<style lang="postcss">
/********************************/
/* Local CSS for this component */
/********************************/
.default-layout-wrapper {
  margin-top: 30px;
}

/********************************/
/* Global debugging classes     */
/* Search for "dbg-" in project */
/********************************/
.dbg-floating-switch {
  position: absolute;
  top: -27px;
  right: -4px;
}

.dbg-container {
  /* In order not to interfare with bootstrap container do not modify margin left, right. */
  padding-top: var(--dbg-wrapper__padding-top);
  background-color: var(--dbg-wrapper__background-color);
  position: relative;
  border: 1px dotted black;
}

.dbg-wrapper {
  padding-top: var(--dbg-wrapper__padding-top);
  margin: var(--dbg-wrapper__margin);
  background-color: var(--dbg-wrapper__background-color);
  border: var(--dbg-wrapper__border);
  position: var(--dbg-wrapper__position);
}

.dbg-infobox {
  display: var(--dbg-infobox__display);
  padding: 0 3px;
  margin: 0;
  height: 17px;
  font-size: 0.7rem;
  font-weight: 300;
  background-color: gray;
  color: white;
  position: absolute;
  left: 0;
  top: 0;
}

/***************************/
/* Global CSS for this app */
/***************************/

body {
  background-color: white;
  color: black;
}

a {
  color: black;
  text-decoration: none;
}

img {
  width: 100%;
  height: auto;
}
</style>
