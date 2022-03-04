"use stirct";

const fs = require("fs").promises;

class UserStorage {
  static getUsers() {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        const users = JSON.parse(data);
        return users;
      })
      .catch(console.error);
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

  static async save(userInfo) {
    const users = await this.getUsers();
    if (users.id.includes(userInfo.id)) {
      throw "ID already exists";
    }
    users.id.push(userInfo.id);
    users.pwd.push(userInfo.pwd);
    users.name.push(userInfo.name);
    fs.writeFile("./src/databases/users.json", JSON.stringify(users));
    return { success: true };
  }
}
module.exports = UserStorage;
