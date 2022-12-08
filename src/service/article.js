const connection = require("../mysql");

class ArticleService {
  // 创建文章
  async create(params, user) {
    const { title, content, tag, category, publishStatus } = params;
    const statement = `INSERT INTO article (title, content, tag, category, creator, publishStatus) VALUES (?, ?, ?, ?, ?, ?);`;
    const [result] = await connection.execute(statement, [
      title,
      content,
      tag,
      category,
      user,
      publishStatus,
    ]);
    return result;
  }

  // 获取文章列表
  async getList() {
    const statement = `SELECT id, title, content, category, tag, publishStatus, createAt AS createTime, updateAt AS updateTime FROM article ORDER BY id DESC;`;
    const [result] = await connection.execute(statement);
    result?.forEach((v) => (v.tag = v.tag.split(";")));
    return {
      result,
      total: result?.length,
    };
  }

  // 更新文章
  async update(params) {
    const { title, category, tag, publishStatus, id } = params;
    const statement = `UPDATE article SET title = ?, category = ?, tag = ?, publishStatus = ? WHERE id = ?;`;
    const [result] = await connection.execute(statement, [
      title,
      category,
      tag,
      publishStatus,
      id,
    ]);
    return result;
  }

  // 查询文章
  async query(field, value) {
    // by id不做模糊查询
    const statement = `SELECT id, title, content, category, tag, publishStatus, createAt AS createTime, updateAt AS updateTime FROM article WHERE ${
      field === "id" ? "id = ?" : `${field} LIKE CONCAT('%', ?, '%')`
    } ORDER BY id DESC;`;
    const [result] = await connection.execute(statement, [value]);
    result?.forEach((v) => (v.tag = v.tag.split(";")));
    return {
      result,
      total: result?.length,
    };
  }

  // 删除文章
  async remove(id) {
    const statement = `DELETE FROM article WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new ArticleService();
