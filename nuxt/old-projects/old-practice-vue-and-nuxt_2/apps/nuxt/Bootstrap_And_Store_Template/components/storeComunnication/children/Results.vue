<template>
  <div class="results-wrapper dbg-wrapper">
    <span class="dbg-infobox">Results.vue</span>

    <p>SelectedMainTag = {{ selectedMainTag }}</p>
    <p>Full name = {{ fullName }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Results',
  computed: {
    ...mapGetters({
      selectedMainTag: 'modules/tags/selectedMainTag',
      fullName: 'modules/names/fullName'
    })
  } // Thanx to this we can directly in the template get access of states
}
</script>

<style lang="postcss" scoped>
.results-wrapper {
}
</style>
