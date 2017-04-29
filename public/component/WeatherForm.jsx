var React = require("react");


var WeatherForm = React.createClass({
	formSubmit : function(e){
		e.preventDefault();
		var city = this.refs.city.value;
		console.log("city: "+city);
		this.props.searchForm(city);
	},
	render : function(){
		return (
				<div>
					<form onSubmit={this.formSubmit}>
						<input type="text" ref="city"/>
						<button>Click</button>
					</form>
				</div>
			);
	}
});

module.exports = WeatherForm;