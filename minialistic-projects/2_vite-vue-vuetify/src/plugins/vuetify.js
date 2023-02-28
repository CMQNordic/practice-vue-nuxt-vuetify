import { createVuetify } from 'vuetify';

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	theme: {
		themes: {
			light: {
				colors: {
					primary: '#ff0000', // red
					secondary: '#fff000', // yellow
					background: '#000fff', // blue
				},
			},
		},
	},
});

