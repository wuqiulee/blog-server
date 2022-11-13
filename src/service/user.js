const connection = require("../mysql");

class UserService {
  async getUserByName(user) {
    const statement = `SELECT * FROM users WHERE user = ?;`;
    const result = await connection.execute(statement, [user]);

    return result[0];
  }
}

module.exports = new UserService();
