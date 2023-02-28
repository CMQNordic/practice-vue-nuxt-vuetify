/* Dependency for Vuetify treeshaking that is done by bundler.    */
/* Install following dependencies:                                 */
/* npm i -D  sass vite-plugin-vuetify                             */
import vuetify from 'vite-plugin-vuetify';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	/* Shall server render the pages (= universa app). False means SPA.  */
	ssr: false,

	app: {
		/* head content included in every page, may be overwritten in pages. */
		head: {
			title: 'Title bl bla',
			script: [],
			link: [
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=KoHo:wght@200;300;400;500;600;700&display=swap',
				},
			],
		},
	},

	css: [
		// CSS file in the project
		// '@/assets/css/main.css',
		// SCSS file in the project (SASS must be installed for Vite to transpie it)
		// '@/assets/css/vuetify/settings.scss',
	],

	// build: {
	// 	transpile: ['vuetify'],
	// },

	// Enables automatic treeshaking of unused vuetify component, in vite, as described in https://next.vuetifyjs.com/en/features/treeshaking/
	// Additionally we can provide own customization variables, mixins and functions of vuetify
	modules: [
		async (options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) => {
				config?.plugins?.push(
					vuetify({
						styles: { configFile: 'assets/css/vuetify/settings.scss' },
					}),
				);
			});
		},
	],
});

