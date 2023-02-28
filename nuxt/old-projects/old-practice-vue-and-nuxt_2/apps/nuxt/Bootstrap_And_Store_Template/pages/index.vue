<template>
  <div class="index-wrapper dbg-wrapper">
    <span class="dbg-infobox">index.vue</span>

    <the-tabs />

  </div>
</template>

<script>
import TheTabs from '@/components/TheTabs'

export default {
  name: 'Index',
  components: {
    TheTabs
  }
}
</script>

<style lang="postcss" scooped>
.index-wrapper {
  /* add local scoped styles here */
}
</style>
