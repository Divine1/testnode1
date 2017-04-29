var axios = require("axios");

const API_URL = "http://api.openweathermap.org/data/2.5/weather?&APPID=e01164dd0030d82d63bcd4aca9994ae5&units=imperial";
//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=e01164dd0030d82d63bcd4aca9994ae5&units=imperial


module.exports = {
	getTemp : function(location){
		var encoded = encodeURIComponent(location);
		var requestUrl = `${API_URL}&q=${encoded}`;
		return axios.get(requestUrl).then(function(res){
			return res.data.main.temp;
		},function(res){
			throw new Error(res.data.message);
		});
	}
};

