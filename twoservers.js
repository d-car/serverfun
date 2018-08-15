var http = require("http");

var PORT1 = 7000;

var PORT2 = 7500;

var server1 = http.createServer(makeRequest1);

var server2 = http.createServer(makeRequest2)

function makeRequest1(req, res) {
    res.end("blah" + req.url)
};

function makeRequest2(req, res) {
    res.end("blah" + req.url)
};

server1.listen(PORT1, function() {
    console.log("Port: " + PORT1 + " says that you are cool...")
})

server2.listen(PORT2, function() {
    console.log("Port: " + PORT2 + " says but not that cool... ")
})