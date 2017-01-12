var express = require('express');
var twilio = require('twilio');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static('index.html'));

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/index.html");
});

var accountSid = "ACe7a837186774c62a5c084d883471ff79"
var authToken  = "0073a6844335c258559ee77e76dedc8e"
var workspaceSid = "WS9015ca51b9ab6115a86bed25f66e0af6"
var workflowSid = "WW7c2e1725801f4c07058d862f5638983a"

// var client = new twilio.TaskRouterClient(accountSid, authToken);
// var client = require('twilio')(accountSid, authToken);

app.post("/assignment_callback", function(req, res) {
	res.send({});
});

app.post("/create_task", function(req, res) {
	// var task = client.tasks(workspaceSid).create(
 //        workflowSid=workflowSid,
 //        attributes='{"selected_week": 2}'
 //    );

 //    console.log(task.attributes);

 var client = new twilio.TaskRouterClient(accountSid, authToken, workspaceSid);

client.workspace.tasks.create({
    workflowSid: workflowSid,
    attributes: '{"weeks":2}'
});


// client.workspace.tasks.list(function(err, data) {
//     data.tasks.forEach(function(task) {
//         console.log(task.attributes);
//     })
// });
    res.send({});
});


app.listen(PORT, function() {
	console.log("running on port " + PORT);
});