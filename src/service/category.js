const connection = require("../mysql");

class CategoryService {
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
  async getList() {
    const statement = `SELECT id, name, createAt AS createTime, updateAt As updateTime FROM category ORDER BY id DESC;`;
    const [result] = await connection.execute(statement);
    return {
      result,
      total: result?.length,
    };
  }
}

module.exports = new CategoryService();
