import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/marti/Desktop/temp_projects/vite-vue-nuxt-minimalistic-project/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}