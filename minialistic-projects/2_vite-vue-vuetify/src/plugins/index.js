
// Plugins
//import { loadFonts } from './webfontloader'

import router from '../router';
import vuetify from './vuetify';

export function registerPlugins(app) {
	//loadFonts()
	app.use(router);
	app.use(vuetify);
}

