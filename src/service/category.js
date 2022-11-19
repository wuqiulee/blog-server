const connection = require("../mysql");

class categoryService {
  // 创建分类
  async create(name, user) {
    const statement = `INSERT INTO category (name, creator) VALUES (?, ?);`;
    const [result] = await connection.execute(statement, [name, user]);
    return result;
  }

  // 根据名称查找分类
  async getCategoryByName(name) {
    const statement = `SELECT * FROM category WHERE name = ?;`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }

  // 获取分类列表
  async getList(pageNum, pageSize) {
    const offset = String((pageNum - 1) * pageSize);
    const statement = `SELECT JSON_ARRAYAGG(JSON_OBJECT('id', category.id, 'name', category.name, 'createTime', category.createAt, 'updateTime', category.updateAt)) AS result, COUNT(*) AS total FROM category LIMIT ?, ?;`;
    const [result] = await connection.execute(statement, [offset, pageSize]);
    return result[0];
  }
}

module.exports = new categoryService();
