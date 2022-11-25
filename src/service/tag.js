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
  async getList(pageNum = "1", pageSize = "100") {
    const offset = String((pageNum - 1) * pageSize);
    const statement = `SELECT JSON_ARRAYAGG(JSON_OBJECT('id', tag.id, 'name', tag.name, 'createTime', tag.createAt, 'updateTime', tag.updateAt)) AS result, COUNT(*) AS total FROM tag LIMIT ?, ?;`;
    const [result] = await connection.execute(statement, [offset, pageSize]);
    return result[0];
  }
}

module.exports = new TagService();
