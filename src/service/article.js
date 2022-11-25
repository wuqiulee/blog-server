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
}

module.exports = new ArticleService();
