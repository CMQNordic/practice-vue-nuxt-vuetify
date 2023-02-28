import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/marti/Desktop/temp_projects/vite-vue-nuxt-minimalistic-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}