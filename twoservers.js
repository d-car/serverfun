var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

var server = http.createServer(makeRequest);

function makeRequest(req, res) {
    res.end("blah" + req.url)
};

server.listen(PORT1, function() {
    console.log("Port: " + PORT1 + " says that you are cool...")
})

server.listen(PORT2, function() {
    console.log("Port: " + PORT2 + " says but not that cool... ")
})