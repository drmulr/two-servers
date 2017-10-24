// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;


// Create a generic function to handle requests and responses
function handleGoodRequest(request, response) {
  // Send the below string to the client when the user visits the PORT URL
  response.end("Good things!!");
}
// Create a generic function to handle requests and responses
function handleBadRequest(request, response) {
    // Send the below string to the client when the user visits the PORT URL
    response.end("Bad things!!");
  }


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleGoodRequest);
var server2 = http.createServer(handleBadRequest);


// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

server2.listen(7001, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:7001");
  });
