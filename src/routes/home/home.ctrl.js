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

  register: (req, res) => {
    res.render("home/register.ejs");
  },
};

const process = {
  login: async (req, res) => {
    const user = new User(req.body);
    return res.json(await user.login());
  },
  register: (req, res) => {
    const user = new User(req.body);
    return res.json(user.register());
  },
};

module.exports = {
  output,
  process,
};
