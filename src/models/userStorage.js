"use stirct";

class UserStorage {
  static #users = {
    id: ["test", "test1", "test2"],
    pwd: ["1234", "5875", "123456"],
    name: ["Harvey", "Rocky", "Steve"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}
module.exports = UserStorage;
