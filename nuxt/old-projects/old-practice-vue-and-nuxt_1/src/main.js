import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// This provided default vue object
// Provides router where index.js 
// And mounts the DOM template with labled id
createApp(App).use(router).mount('#app')
