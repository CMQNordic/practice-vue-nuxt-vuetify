import { createPinia } from 'pinia';
import router from '@/router';

export function registerPlugins(app) {
	app.use(createPinia);
	app.use(router);
}
