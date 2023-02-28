//import 'vuetify/styles';
import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((nuxtApp) => {
	const vuetify = createVuetify({
		/* 	ssr: false, */
		theme: {
			themes: {
				light: {
					colors: {
						primary: '#ff0000',  // red
						secondary: '#fff000', // yellow
						background: '#000fff', // blue
					},
				},
			},
		},
	});

	nuxtApp.vueApp.use(vuetify);

	console.log('❤️ Initialized Vuetify 3');
});
