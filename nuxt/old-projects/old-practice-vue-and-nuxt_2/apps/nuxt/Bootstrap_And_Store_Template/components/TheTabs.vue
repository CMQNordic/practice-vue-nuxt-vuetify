<template>
  <div class="the-tabs-wrapper dbg-wrapper">
    <span class="dbg-infobox">TheTabs.vue</span>

    <b-tabs content-class="mt-3" fill>

      <!-- tab 1 -->
      <b-tab title="Store communication" active class="row3">
        <store-communication />
      </b-tab>

      <!-- tab 2 -->
      <b-tab title="EventBus communication">
        <p>I'm the second tab.</p>
      </b-tab>

      <!-- tab 3 -->
      <b-tab title="Props & Emit communication">
        <p>I'm a third tab.</p>
      </b-tab>

    </b-tabs>

  </div>
</template>

<script>
import StoreCommunication from '@/components/storeComunnication/StoreCommunication'

export default {
  name: 'TheTabs',
  components: {
    StoreCommunication
  }
}
</script>

<style lang="postcss" scoped>
.the-tabs-wrapper {
  /* add local scoped styles here */
}
</style>
