const connection = require("../mysql");

class SayService {
  // 发表说说
  async publish(content, user) {
    const statement = `INSERT INTO say (content, creator) VALUES (?, ?);`;
    const result = await connection.execute(statement, [content, user]);
    return result[0];
  }

  // 获取说说列表
  async getList(pageNum, pageSize) {
    const offset = String((pageNum - 1) * pageSize);
    const statement = `SELECT id, content, createAt AS publishTime FROM say ORDER BY id DESC LIMIT ?, ?;`;
    const [result] = await connection.execute(statement, [offset, pageSize]);
    return {
      result,
      total: result?.length,
    };
  }

  // 更新说说
  async update(content, updater, id) {
    const statement = `UPDATE say SET content = ?, updater = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [
      content,
      updater,
      id,
    ]);
    return result;
  }

  // 删除说说
  async remove(id) {
    const statement = `DELETE FROM say WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new SayService();
