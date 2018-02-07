const express = require("express");
const bodyParser = require("body-parser");
//const mongoose = require("mongoose");
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
//mongoose.Promise = global.Promise;
// Connect to the Mongo DB
/*
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);
*/

/*
// heroku
mongoose.connect("mongodb://heroku_4x6kq435:icsppsff20oehk7jd2ob9koaaf@ds117148.mlab.com:17148/heroku_4x6kq435",{
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true
});
*/


var db = require("./models");
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
