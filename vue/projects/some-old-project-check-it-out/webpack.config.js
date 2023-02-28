const path = require('path')
const fse = require('fs-extra')
const webpack = require('webpack')
const currentNpmScript = process.env.npm_lifecycle_event // recognizing what script is run
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // deleting all files in /dist when building for prod
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // extracting .css to file in /dist when building for prod
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin') // minimizing .css file in /dist, for prod
const HtmlWebpackPlugin = require('html-webpack-plugin') // extracting html and link with our bundles, for prod
const { VueLoaderPlugin } = require('vue-loader') // parsing .vue files

const entryScriptFile = './src/main.js' // the main entry .js script file
const indexDirectory = path.resolve(__dirname, 'src') // path to folder where entry index.html is located
const productionDirectory = path.resolve(__dirname, 'dist') // path to folder where production files will be placed
const bMinify = false // For production: Minify files?
const logMode = 'errors-warnings'

/****************************************************************************************************************************/
/* Webpack configuration (tested with webpack 5.65.0)                                                                       */
/* Read more: https://webpack.js.org/configuration/                                                                         */
/****************************************************************************************************************************/
console.log('<i>\x1b[32m __________________________________________________\x1b[0m ')
console.log('<i>\x1b[32m Running npm script: ' + currentNpmScript + '\x1b[0m  Press Ctrl+C to exit...')

// Plugin to copy all images to dist when building for prod
class CopyAssetsPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('Copy images', () => {
      fse.copySync('./src/assets/images', './dist/assets/images')
    })
  }
}

// For each existing .html file add a plugin extracting that html to "dist"
let HtmlWebpackPlugins = fse
  .readdirSync('./src') // look for .html files here
  .filter((file) => {
    return file.endsWith('.html')
  })
  .map((file) => {
    return new HtmlWebpackPlugin({
      template: './src/' + file, // path to file to extract from
      filename: file, // extract html same filename
      minify: bMinify, // for debugging turn this to false
    })
  })

let prodPlugins = [
  new CleanWebpackPlugin(),
  new VueLoaderPlugin(),
  new MiniCssExtractPlugin({ filename: 'styles.[chunkhash].css' }),
  // new MiniCssExtractPlugin({ filename: 'styles.css' }),
  new CopyAssetsPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: true, // enable/disable Options API. Vue v2 usage of data() support, default: true)
    __VUE_PROD_DEVTOOLS__: true, // (enable/disable devtools support in production, default: true) ???
  }),
].concat(HtmlWebpackPlugins)

let devPlugins = [
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: true, // enable/disable Options API. Vue v2 usage of data() support, default: true)
    __VUE_PROD_DEVTOOLS__: true, // (enable/disable devtools support in production, default: true) ???
  }),
]

// PostCSS plugins that transform our written css to "browser-friendly"
const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('autoprefixer'),
]

let config = {
  entry: entryScriptFile, // path to .js file to bundling process
  module: { rules: [] }, // populated later depending on compilation mode.
  stats: logMode,
}

if (currentNpmScript == 'dev') {
  /************************************************************* DEVELOPMENT CONFIGURATION (dev) *********************/
  config.mode = 'development'
  config.output = { filename: 'bundled.js' } // bundled javascript will be served from cache (not save to any location)
  config.plugins = devPlugins
  config.devServer = {
    static: {
      directory: indexDirectory, // absolute path to directory where main index.html to serve to browser is located
      watch: false, // if enabled default=true, then changes in [directory] will always trigger a FULL RELOAD. Undesired.
    },
    hot: true, // hot module feature that keeps running after build to inject css & js changes without FULL RELOAD.
    watchFiles: ['./src/*.html'], // watch for changes in following files. Options example:"./app/**/*.php","./app/**/*"
    liveReload: true, // reload browser (full refresh) when any of [watchFiles] were changed
    port: 3030, // serve at this port
  }
  config.module.rules = [
    {
      test: /\.css$/i,
      use: [
        'style-loader', // bundel css & as javascript in one file to browser
        {
          loader: 'css-loader', // bundle css into a js-file with import
          options: { url: false }, // by default=true, css-loader handles images (e.g.background images). It can be disabled.
        },
        {
          loader: 'postcss-loader', // loads various postcss plugins to transform postcss to pure css
          options: {
            postcssOptions: { plugins: postCSSPlugins },
          },
        },
      ],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader', // parses parts of vue components
    },
  ]
} else if (currentNpmScript == 'prod') {
  /**************************************************************** PRODUCTION CONFIGURATION (build) *****************************/
  config.mode = 'production'
  config.watch = true // true = stays running after build
  config.plugins = prodPlugins
  config.output = {
    path: productionDirectory, // bundled javascript will be served at this location. Default = "dist" if not set.
    filename: '[name].[chunkhash].js', // define filename for script file(s) with unique hash regenerated when changes applied.
    //chunkFilename: '[name].[chunkhash].js', // ??? unsure what this is for?
  }
  config.module.rules = [
    {
      test: /\.css$/i,
      use: [
        MiniCssExtractPlugin.loader, // this loader extracts css from the project
        {
          loader: 'css-loader', // bundle css into a js-file with import
          options: { url: false }, // by default=true, css-loader handles images (e.g.background images). It can be disabled.
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: postCSSPlugins, // loads various postcss plugins to transform postcss to pure css
            },
          },
        },
      ],
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader', // parses parts of vue components
    },
  ]
  config.optimization = {
    splitChunks: { chunks: 'all' }, // Split bundle to vendor specific files. Webpack automatically creates one bundled file <20k To force split add "minSize: 1000" (1k)
    minimize: bMinify,
    minimizer: ['...', new CssMinimizerPlugin()], // TODO kolla uppp vad dessa gör
  }
}

// Finally add some nice prints
if (config.devServer && config.devServer.port) {
  console.log(
    '<i>\x1b[32m Bundle is served from cache at: \x1b[0m\x1b[36m\x1b[4mhttp://localhost:' +
      config.devServer.port +
      '/' +
      config.output.filename +
      '\x1b[0m'
  )
}
if (config.output && config.output.path) {
  console.log('<i>\x1b[32m project served for production at: \x1b[0m\x1b[36m\x1b[4m' + config.output.path + '\x1b[0m')
}

module.exports = config
