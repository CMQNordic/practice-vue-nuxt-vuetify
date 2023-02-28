<template>
  <div class="user-names-wrapper dbg-wrapper">
    <span class="dbg-infobox">UserNames.vue</span>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm px-0 dbg-wrapper">
          <span class="dbg-infobox">child left</span>
          First name: <input type="text" :value="fName" @input="handleNameInput('F', $event)"><br>
          Last name: <input type="text" :value="lName" @input="handleNameInput('L', $event)"><br>
        </div>
        <div class="col-sm dbg-wrapper">
          <span class="dbg-infobox">child right</span>
          <p>Local result: {{ fullName }}</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'UserInfo',
  computed: {
    ...mapGetters({
      fName: 'modules/names/fName',
      lName: 'modules/names/lName',
      fullName: 'modules/names/fullName'
    })
  },
  methods: {
    handleNameInput(type, event) {
      if (type == 'F') {
        this.$store.dispatch('modules/names/setFName', event.target.value)
      } else if (type == 'L') {
        this.$store.dispatch('modules/names/setLName', event.target.value)
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.user-names-wrapper {
  /* add local scoped styles here */
}
</style>
