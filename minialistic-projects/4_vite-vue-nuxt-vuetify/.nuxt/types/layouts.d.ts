import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/marti/OneDrive/Jobb/Development/WebDev/learn-and-play-repos/practice-vue-nuxt-vuetify/minialistic-projects/4_vite-vue-nuxt-vuetify/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}