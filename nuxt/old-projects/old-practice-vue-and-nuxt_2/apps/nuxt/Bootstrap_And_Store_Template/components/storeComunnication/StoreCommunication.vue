<template>
  <div class="store-communication-wrapper dbg-wrapper">
    <span class="dbg-infobox">StoreCommunication.vue</span>

    <b-button v-b-toggle.collapse-3 class="m-1">Read more...</b-button>
    <b-collapse id="collapse-3">
      <b-card>
        Communication between children is made through Vue store. Tags are loaded in store. Selections are done in components and the state changes are saves in store and __nuxt-error-page
        Result component is bound to changes.
      </b-card>
    </b-collapse>

    <tags />
    <user-info />
    <results />

  </div>
</template>

<script>
import Tags from '@/components/storeComunnication/children/Tags'
import UserInfo from '@/components/storeComunnication/children/Userinfo.vue'
import Results from '@/components/storeComunnication/children/Results.vue'

export default {
  name: 'StoreCommunication',
  components: {
    Tags,
    UserInfo,
    Results
  }
}
</script>

<style lang="postcss" scooped>
.store-communication-wrapper {
  /* add local scoped styles here */
}
</style>
