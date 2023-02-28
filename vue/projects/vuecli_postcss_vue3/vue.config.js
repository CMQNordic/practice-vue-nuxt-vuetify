const { defineConfig } = require('@vue/cli-service');

const bMinify = false; // disable minify (for debug purposes)
const globalStyles = 'global-app-styles.css'; // extract all styles to extra file in

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = defineConfig({
	transpileDependencies: false,
	css: {
		loaderOptions: {
			postcss: {
				postcssOptions: {
					// options here will be passed to postcss-loader
					plugins: [
						require('postcss-import'), // set first
						require('postcss-mixins'),
						require('postcss-nested'),
						require('postcss-simple-vars'),
					],
				},
			},
		},
	},
	chainWebpack: (config) => {
		if (!bMinify) {
			// do not minify files
			config.optimization.minimize(false);
		}
	},
	configureWebpack: {
		// extract css to an additional file
		plugins: globalStyles ? [new MiniCssExtractPlugin({ filename: 'global-app-styles.css' })] : [],
	},
});

