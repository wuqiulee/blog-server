const connection = require("../mysql");

class SayService {
  // 发表说说
  async publish(content, user) {
    const statement = `INSERT INTO say (content, creator) VALUES (?, ?);`;
    const result = await connection.execute(statement, [content, user]);
    return result[0];
  }
}

module.exports = new SayService();
