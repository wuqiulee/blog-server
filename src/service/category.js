const connection = require("../mysql");

class categoryService {
  // 创建分类
  async create(name, user) {
    const statement = `INSERT INTO category (name, creator) VALUES (?, ?);`;
    `INSERT INTO comment SET ?`;
    const [result] = await connection.execute(statement, [name, user]);
    return result;
  }

  // 根据名称查找分类
  async getCategoryByName(name) {
    const statement = `SELECT * FROM category WHERE name = ?;`;
    const [result] = await connection.execute(statement, [name]);
    return result[0];
  }
}

module.exports = new categoryService();
