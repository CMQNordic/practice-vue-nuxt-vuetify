// webpack.config.js points out this file
// as starting point with entry: './src/main.js'

// Import Vue framework and first component.
// Render function render the App.vue template component.
// that replaces element "app" in index.html.

import Vue from 'vue';
//import App from './App.vue'
import App from './App_2.vue';

export const serverEventBus = new Vue();
export const appEventBus = new Vue();

new Vue({
    el: '#app',
    render: (h) => h(App)
});
