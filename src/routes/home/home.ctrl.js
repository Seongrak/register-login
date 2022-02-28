"use strict";

const UserStorage = require("../../models/userStorage");

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
    const id = req.body.id;
    const pwd = req.body.pwd;

    const users = UserStorage.getUsers("id", "pwd");

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pwd[idx] === pwd) {
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success: false,
      msg: "failed to login",
    });
  },
};

module.exports = {
  output,
  process,
};
