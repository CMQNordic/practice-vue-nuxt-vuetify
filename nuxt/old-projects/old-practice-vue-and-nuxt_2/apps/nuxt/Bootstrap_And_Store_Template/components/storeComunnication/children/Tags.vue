<template>
  <div class="tags-wrapper dbg-wrapper">
    <span class="dbg-infobox">Tags.vue</span>

    <b-tabs
            content-class="mt-3"
            align="left"
            active-nav-item-class="font-weight-bolder text-success"
            @activate-tab="handleMainTagActivation($event)"
            class="mainTabs">
      <b-tab
             v-for="(tag, idx) in mainTags"
             :key="idx"
             :title="tag.caption"
             :active="tag.activated">

        <b-tabs
                content-class="mt-3"
                align="left"
                active-nav-item-class="font-weight-bold text-success"
                class="subTabs">
          <template v-slot:tabs-end>
            <b-tab
                   v-for="(tag, idx) in tag.subTags"
                   :key="idx"
                   :title="tag.caption"
                   :active="tag.activated" />
          </template>
        </b-tabs>
      </b-tab>
    </b-tabs>

    <hr>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      mainTags: 'modules/tags/mainTags'
    })
  },
  methods: {
    handleMainTagActivation(index) {
      this.$store.dispatch('modules/tags/setSelectedMainTag', index)
    }
  }
}
</script>

<style lang="postcss" scoped>
.tags-wrapper {
}

.mainTabs >>> .nav-link {
  padding: 4px;
}
</style>
