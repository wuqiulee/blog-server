const connection = require("../mysql");

class TagService {
  // 创建标签
  async create(name, user) {
    const statement = `INSERT INTO tag (name, creator) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [name, user]);
    return result;
  }

  // 根据名称查找标签
  async getTagByName(name) {
    const statement = `SELECT * FROM tag WHERE name = ?;`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }

  // 获取标签列表
  async getList() {
    const statement = `SELECT id, name, createAt AS createTime, updateAt AS updateTime FROM tag ORDER BY id DESC;`;
    const [result] = await connection.execute(statement);
    return {
      result,
      total: result?.length,
    };
  }
}

module.exports = new TagService();
