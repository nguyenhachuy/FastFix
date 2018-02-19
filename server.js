const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fastfix",
  {
    useMongoClient: true
  }
);
/*
// heroku
mongoose.connect("mongodb://heroku_3jsk06gc:l5g8q2tttcq9lu0o5e9nsdria3@ds239368.mlab.com:39368/heroku_3jsk06gc",{
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});

*/
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});



