"use strict";

// modules
const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

//routing
const home = require("./src/routes/home");

// app setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

//for ejs files
app.use(express.static(`${__dirname}/src/public`));

//body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", home);

module.exports = app;
