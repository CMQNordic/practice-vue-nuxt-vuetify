/******************************************************************************/
/*   Registers vuetify 3                                                      */
/*   Install dependencies:                                                    */
/*                                                                            */
/*   npm i vuetify                                                            */
/*                                                                            */
/*   Material Design SVG Icons(if mdi icons to be used, smallest bundle)    */
/*   npm i -D @mdi/js                                                          */
/*                                                                            */
/*   Fontawesome Icons (if fa icons to be used)                             */
/*   npm i -D @fortawesome/free-regular-svg-icons                             */
/*   npm i -D @fortawesome/free-solid-svg-icons                               */
/*   npm i -D @fortawesome/free-brands-svg-icons                              */
/*   npm i -D @fortawesome/fontawesome-svg-core                               */
/*   npm i -D @fortawesome/vue-fontawesome                                    */
/*                                                                            */
/******************************************************************************/

import { createVuetify } from 'vuetify';
import 'vuetify/styles';

/* Import default SVG iconsets with corresponding aliases (including svg icons) */
/* Described in https://next.vuetifyjs.com/en/features/icon-fonts/ */
import { mdi, aliases } from 'vuetify/iconsets/mdi-svg';

/* Import all components and directives for fast protoyping, or add with Treeshaking */
// import * as components from 'vuetify/components';
// import * as directives from 'vuetify/directives';

/* Import desired MDI SVG icons */
/* Directly in components as described in https://next.vuetifyjs.com/en/features/icon-fonts/#material-design-icons-js-svg  */

/* Import desired FA SVG icons */
/* As described in https://fontawesome.com/docs/web/use-with/vue/ */
import { fa } from 'vuetify/iconsets/fa-svg';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'; // Import all with { fas }
import { faUser as farUser } from '@fortawesome/free-regular-svg-icons'; // Import all with { far }
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'; // Import all with { fab }

const allUsedFaIcons = [fasUser, farUser, faFacebook, faInstagram, faWhatsapp];
const allUsedAliases = { ...aliases, 'fas-mug-hot': 'fa:fas fa-mug-hot' };

export default defineNuxtPlugin((nuxtApp) => {
	/* Add used fa icons as described in https://fontawesome.com/docs/web/use-with/vue/add-icons  */
	library.add(...allUsedFaIcons);
	nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon); // Note! Name 'font-awesome-icon' is hardcoded in Vuetify :/

	/* Initialize vuetify with all the desired customization */
	const vuetify = createVuetify({
		ssr: true,
		icons: {
			defaultSet: 'mdi',
			aliases: allUsedAliases,
			sets: { mdi, fa },
		},
	});

	nuxtApp.vueApp.use(vuetify);

	console.log(`❤️ Initialized Vuetify 3 with Icons. \nusedAliases: `, allUsedAliases, `\nusedFaIcons: `, allUsedFaIcons);
});

