const connection = require("../mysql");

class LogService {
  // 添加日志
  async create(logDate, content, user) {
    const statement = `INSERT INTO log (logDate, content, creator) VALUES (?, ?, ?);`;
    const result = await connection.execute(statement, [
      logDate,
      content,
      user,
    ]);
    return result[0];
  }

  // 获取日志列表
  async getList() {
    const statement = `SELECT id, logDate, content FROM log ORDER BY logDate DESC;`;
    const [result] = await connection.execute(statement);
    return {
      result,
      total: result?.length,
    };
  }

  // 更新日志
  async update(logDate, content, updater, id) {
    const statement = `UPDATE log SET logDate = ?, content = ?, updater = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [
      logDate,
      content,
      updater,
      id,
    ]);
    return result;
  }

  // 删除日志
  async remove(id) {
    const statement = `DELETE FROM log WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new LogService();
