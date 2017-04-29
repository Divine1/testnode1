

var promiseService = function(location){

	return new Promise(function(resolve,reject){
		if(location){
			resolve("success: "+location);
		}
		else{
			reject("failed");
		}

	});
};

promiseService("india").then(function(res){
	console.log(res);
},function(err){
	console.log(err);
});