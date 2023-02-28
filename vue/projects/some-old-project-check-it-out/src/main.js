// Global styles applied for whole site
import './assets/styles/combined-global-styles.css';

// Vue functionality from Npm package
import { createApp } from 'vue';

// Global components to use in components and is children
import DebugWrapper from './components/ui/DebugWrapper.vue';
import BaseAssignment from './components/ui/BaseAssignment.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';

// A vue instance
import VueCourse from './components/VueCourse.vue';
const vueCourse = createApp(VueCourse);
vueCourse.component('debug-wrapper', DebugWrapper);
vueCourse.component('base-assignment', BaseAssignment);
vueCourse.component('base-button', BaseButton);
vueCourse.component('base-card', BaseCard);
vueCourse.mount('#vue-course');
