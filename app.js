
const express = require('express');

require('metrics-tracker-client').track();

// create a new express server
const app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));

// set the port number based on the environment variable, 
// if it exists. Otherwise, use port 6006. 
const port = process.env.PORT || 6006;

// start server on the specified port and binding host
app.listen(port);
console.log("server starting on port " + port);

