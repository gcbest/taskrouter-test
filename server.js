var express = require('express');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static('index.html'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

app.post("/assignment_callback", function(req, res) {
	res.send({});
});


app.listen(PORT, function() {
	console.log("running on port " + PORT);
});