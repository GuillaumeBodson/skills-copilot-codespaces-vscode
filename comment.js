// Create a web server
// http://localhost:3000/comments
const express = require("express");
const app = express();
const port = 3000;

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/comments", function (req, res) {
  var comments = []; });