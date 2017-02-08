var webpack = require('webpack');
var path = require('path');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
module.exports = {
	entry :['script!jquery/dist/jquery.min.js',
	'script!foundation-sites/dist/js/foundation.min.js',
	'./app/app.jsx'],
	externals:{
		jquery: 'jQuery'
	},
	plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
			'jQuery':'jquery'
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor:{
				warnings: false
			}
		})
	],
	output: {
		path: __dirname,
		filename: './public/bundle.js'
	},
	resolve: {
		root : __dirname,
		modulesDirectories:['node_modules', './app/components','./app/api'],
		alias :{
			app: 'app',
			ApplicationCustomStyle: 'app/styles/app.scss',
			Action: 'app/actions/actions.jsx',
			reducers: 'app/reducers/reducers.jsx',
			configureStore:'app/store/configureStore.jsx'
		},
		extensions: ['','.js','.jsx']
	},
	module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-0' }
    ]
  },
  sassLoader:{
	  includePaths:[
	  path.resolve(__dirname,'./node_modules/foundation-sites/scss')
	  ]



  },
  devtool: process.env.NODE_ENV? undefined : 'cheap-module-eval-source-map'


}
