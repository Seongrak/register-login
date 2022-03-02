"use stirct";

const fs = require("fs").promises;

class UserStorage {
  static getUsers(...fields) {
    //const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }

  static getUserInfo(id) {
    //const users = this.#users;

    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) => {
          newUser[info] = users[info][idx];
          return newUser;
        }, {});

        return userInfo;
      })
      .catch(console.log);
  }

  static save(userInfo) {
    //const users = this.#users;
    users.id.push(userInfo.id);
    users.pwd.push(userInfo.name);
    users.name.push(userInfo.name);
    return { success: true };
  }
}
module.exports = UserStorage;
