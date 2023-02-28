<template>
  <!-- v-model: If true then the element is visible, otherwise false not, if null then internal behavior. -->
  <!-- permanent: "true" - element is shown all the time. Otherwise internal logic depending on screen size.  -->
  <!-- temporary: "true" - uses a scrim (overlay) to darken the background. Often used when toggled from an icon.  -->
  <!-- left: "true" -> element is on the left side. If not defined or false then this (left) is the default. -->
  <!-- right: "true" - element is on the right side. If not defined or false then left is the default. -->
  <!-- clipped: "True" - positions element below the <v-app-bar>. Otherwise full screen. 
       In order header to overlap all way on top, "clipped-left" or "clipped right" must be set on header element. -->
  <!-- mini-variant: "True" - element is thinner than usually, just showing fist icon.  -->
  <!-- style: special fix to get sideBar down when in temporary mode to be under the top-bar. -->
  <v-navigation-drawer
                       v-model="show"
                       :permanent="permanent"
                       :temporary="temporary"
                       :left="left"
                       :right="right"
                       :clipped="belowTopbar"
                       :mini-variant="!wide"
                       :style="temporary && belowTopbar ? `margin-top: ${$vuetify.application.top}px` : null"
                       app>
    <v-list>
      <v-list-item
                   v-for=" (item, i) in items"
                   :key="i"
                   :to="item.to"
                   router
                   exact>

        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>

      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'SideNavigation',
  props: {
    show: { type: Boolean, default: false },
    permanent: { type: Boolean, default: false },
    temporary: { type: Boolean, default: false },
    left: { type: Boolean, default: true },
    right: { type: Boolean, default: false },
    belowTopbar: { type: Boolean, default: false },
    wide: { type: Boolean, default: false },
    items: { type: Array, required: true }
  }
}
</script>

<style lang="postcss" scoped>
</style>