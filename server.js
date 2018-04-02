var app   = require('express')();
var http = require('http').Server(app);
var bodyParser = require("body-parser");
 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.get('/webhookget',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to GET & POST request Demo..";
    res.json(data);
    console.log("Get method called");
    console.log(req);
    console.log("******************************************************************************************");
});

app.post('/webhookpost',function(req,res){
    console.log("Post method called");
    console.log(res);
    console.log("******************************************************************************************");
});

http.listen(8000,function(){
	console.log("Connected & Listen to port 8000");
});