"use strict";

const UserStorage = require("./userStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const users = UserStorage.getUserInfo(this.body.id);

    if (users.id) {
      if (users.id === this.body.id && users.pwd === this.body.pwd) {
        return { success: true };
      }
      return { success: false, msg: "Wrong password" };
    }
    return { success: false, msg: "Wrong ID" };
  }
}

module.exports = User;
