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
  async getList(pageNum = "0", pageSize = "500") {
    const offset = String(pageNum * pageSize);
    const statement = `SELECT id, logDate, content, (SELECT COUNT(*) FROM log) AS total FROM log ORDER BY logDate DESC LIMIT ?, ?;`;
    const [result] = await connection.execute(statement, [offset, pageSize]);
    return {
      result,
      pageNum: Number(pageNum) + 1,
      pageSize: Number(pageSize),
      total: result[0].total,
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
