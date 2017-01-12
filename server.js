var express = require('express');
var twilio = require('twilio');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static('index.html'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

var account_sid = "ACe7a837186774c62a5c084d883471ff79"
var auth_token  = "0073a6844335c258559ee77e76dedc8e"
var workspace_sid = "WQdf1a595e3cd1c5af8cb82d3d13699c2e"
var workflow_sid = "WWf8ca2679597d21271bb9ef9f021780ab"

var client = twilio.TwilioTaskRouterClient(account_sid, auth_token)

app.post("/assignment_callback", function(req, res) {
	res.send({});
});

app.post("/create_task", function(req, res) {
	var task = client.tasks(workspace_sid).create(
        workflow_sid=workflow_sid,
        attributes='{"selected_week": 2}'
    );

    console.log(task.attributes);
    res.send({});
});


app.listen(PORT, function() {
	console.log("running on port " + PORT);
});