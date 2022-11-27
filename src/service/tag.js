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

  // 删除标签
  async remove(id) {
    const statement = `DELETE FROM tag WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }

  // 更新标签
  async update(name, id) {
    const statement = `UPDATE tag SET name = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [name, id]);
    return result;
  }
}

module.exports = new TagService();
