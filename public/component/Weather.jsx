var React = require("react");
var WeatherForm = require("WeatherForm");
var WeatherMessage = require("WeatherMessage");
var OpenWeatherMap = require("OpenWeatherMap");


var Weather = React.createClass({

	getInitialState : function(){
		return {
			location : "canada",
			temp: 50,
			isLoading: false
		};
	},
	searchForm : function(location){
		console.log("location: "+location);
		/*this.setState({
			location : location,
			temp : 40
		});*/
		var that =this;
		that.setState({
			isLoading : true
		});
		OpenWeatherMap.getTemp(location).then(function(res){
			console.log("success: "+res);
			that.setState({
				location : location,
				temp : res,
				isLoading : false
			});
		},function(res){
			console.log("failed: "+res);
		});
	},
	render : function(){


		var that=this;
		var {location,temp} = that.state;
		debugger;
		var weatherMsg = function(){
			if(that.state.isLoading){
				return <h2>Loading...</h2>
			}else{
				return <WeatherMessage location={location} temp={temp} />
			}
		};
		return (
				<div>
					Weather area
					<WeatherForm searchForm={this.searchForm}/>
					{weatherMsg()}
				</div>
			);
	}	
});

module.exports = Weather;