import App from './App.vue';
import { createApp } from 'vue';

// Plugins
import { registerPlugins } from './plugins';

// Styles
import './assets/css/main.css';

const app = createApp(App);
registerPlugins(app);
app.mount('#app');

