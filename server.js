const express = require("express");
const app = express();
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const methodOverride = require("method-override");
const logger = require("morgan");

//Use .env file in config folder
require("dotenv").config({ path: "./config/.env" });

//Connect To Database
connectDB();

//Using EJS for views
app.set("view engine", "ejs");

//Static Folder
app.use(express.static("public"));

//Body Parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Logging
app.use(logger("dev"));

//Use forms for put / delete
app.use(methodOverride("_method"));


app.listen(process.env.PORT, () => {
  console.log("Server is running, you better catch it!");
});