// Dependencies
const express = require("express");
const bodyParser = require("body-parser"); //JSON responses
const mongoose = require("mongoose"); //Mongo object modelling 
const request = require("request"); //Makes http calls
const cheerio = require("cheerio"); //Scraper

// Require all models
const db = require("./models");

// Port configuration for local and Heroku
const PORT = process.env.PORT || process.argv[2] || 3000;

// Initialize Express
const app = express();

// Use body-parser for handling form submissions
app.use(bodyParser.urlencoded({ extended: true }));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));
// Controllers
const router = require("./controllers/routes.js");
app.use(router);
// Connect to the MongoDB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoArticles";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Start/connecting to the server
app.listen(PORT, function () {
    console.log(`This app is successfully running on port: ${PORT}`);
});






