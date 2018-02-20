var firebase = require("firebase");

var config = {
    apiKey: "AIzaSyCDOOZoyWL8oYyb6zJYDjiAqISPclwmgy4",
    authDomain: "fastfix-chat.firebaseapp.com",
    databaseURL: "https://fastfix-chat.firebaseio.com",
    projectId: "fastfix-chat",
    storageBucket: "fastfix-chat.appspot.com",
    messagingSenderId: "1082846111516"
  };
firebase.initializeApp(config);
var fb = firebase.database();

module.exports = fb;