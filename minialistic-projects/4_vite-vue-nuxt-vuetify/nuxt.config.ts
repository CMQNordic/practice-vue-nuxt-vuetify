import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	/* Modes: https://nuxt.com/docs/guide/concepts/rendering/ */
	/* false + generate => Static files, SPA */
	/* true + generate  => Static site, SSG */
	ssr: false,

	css: [
		/* Vuetify precompiled css styles*/
		'vuetify/styles',
		/* Global css styles. Add last to overwrite other styles. */
		'@/assets/css/main.css',
	],

	modules: [
		/* Vuetify */
		/* Dependency: https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin */
		/* Treeshaking: https://next.vuetifyjs.com/en/features/treeshaking/   							*/
		async (options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				config?.plugins?.push(
					vuetify({
						autoImport: true,
						/* Dependency: https://www.npmjs.com/package/sass */
						/* Customize sass variables: https://next.vuetifyjs.com/en/features/sass-variables/#component-specific-variables */
						//styles: { configFile: 'assets/css/vuetify/settings.scss' },
					}),
				);
			});
		},
	],

	/* Vuetify */
	/* Without this Treeshaking build error css not recognized */
	build: {
		transpile: ['vuetify'],
	},
});

