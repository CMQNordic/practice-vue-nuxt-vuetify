import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "C:/Users/marti/OneDrive/Jobb/Development/WebDev/learn-and-play-repos/practice-vue-nuxt-vuetify/nuxt/learn-and-play-nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}