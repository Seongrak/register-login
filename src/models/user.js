"use strict";

const UserStorage = require("./userStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  async login() {
    const users = await UserStorage.getUserInfo(this.body.id);

    if (users.id) {
      if (users.id === this.body.id && users.pwd === this.body.pwd) {
        return { success: true };
      }
      return { success: false, msg: "Wrong password" };
    }
    return { success: false, msg: "Wrong ID" };
  }

  register() {
    return UserStorage.save(this.body);
  }
}

module.exports = User;
