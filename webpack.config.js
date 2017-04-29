module.exports = {
	entry : "./public/app.jsx",
	output : {
 		path: __dirname, 
 		filename: "./public/bundle.js"
	},
	resolve :{
		root : __dirname,
		alias : {
			Main : "public/component/Main.jsx",
			Nav : "public/component/Nav.jsx",
			Weather : "public/component/Weather.jsx",
			About : "public/component/About.jsx",
			Examples : "public/component/Examples.jsx",
			WeatherForm : "public/component/WeatherForm.jsx",
			WeatherMessage : "public/component/WeatherMessage.jsx",
			OpenWeatherMap : "public/api/openweathermap.jsx",
		},
		extensions : ['','.js','.jsx']
	},
	module : {
		loaders : [
			{
				loader : "babel-loader",
				query : {
					presets : ["react","es2015","stage-0"]
				},
				test : /\.jsx?$/,
				exclude : /(node_modules|bower_components)/
			}
		]
	},
	devtool : "cheap-module-eval-source-map"
};