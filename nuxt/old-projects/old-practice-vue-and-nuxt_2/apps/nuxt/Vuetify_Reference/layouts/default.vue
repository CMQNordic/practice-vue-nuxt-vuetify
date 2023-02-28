<template>
  <v-app>
    <!-- Right side navigation. Always visible and permanent. -->
    <side-navigation
                     show
                     permanent
                     left
                     belowTopbar
                     wide
                     :items="chapters" />

    <!-- Header on top with toggle icon for the right side navigation. -->
    <the-header @leftToggle="showRightSidenav = !showRightSidenav" />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- Left side navigation. Toggle by an icon in header. -->
    <side-navigation
                     :show="showRightSidenav"
                     temporary
                     right
                     belowTopbar
                     wide
                     :items="documents" />

    <!-- The footer on bottom -->
    <the-footer />

  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter'
import SideNavigation from '@/components/SideNavigation'

export default {
  name: 'DefaultLayout',
  components: {
    TheHeader,
    TheFooter,
    SideNavigation
  },
  data() {
    return {
      showRightSidenav: false
    }
  },
  computed: {
    ...mapGetters({
      chapters: 'documents/chapters',
      documents: 'documents/documents'
    })
  }
}
</script>