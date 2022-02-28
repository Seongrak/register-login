"use strict";

const User = require("../../models/user");

const output = {
  home: (req, res) => {
    //res.send("NodeJS First");
    res.render("home/index.ejs");
  },

  login: (req, res) => {
    res.render("home/login.ejs");
  },
};
const process = {
  login: (req, res) => {
    const user = new User(req.body);
    return res.json(user.login());
  },
};

module.exports = {
  output,
  process,
};
