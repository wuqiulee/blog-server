const connection = require("../mysql");

class FileService {
  // 上传图片
  async createPicture(filename, mimetype, size, user) {
    const statement = `INSERT INTO picture (filename, mimetype, size, user) VALUES (?, ?, ?, ?)`;
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      user,
    ]);
    return result;
  }

  async getAvatarByUserId(userId) {
    const statement = `SELECT * FROM avatar WHERE user_id = ?;`;
    const [result] = await connection.execute(statement, [userId]);
    return result.pop();
  }

  async createFile(filename, mimetype, size, userId, momentId) {
    const statement = `INSERT INTO file (filename, mimetype, size, user_id, moment_id) VALUES (?, ?, ?, ?, ?)`;
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
      momentId,
    ]);
    return result;
  }

  async getFileByFilename(filename) {
    const statement = `SELECT * FROM file WHERE filename = ?;`;
    const [result] = await connection.execute(statement, [filename]);
    return result[0];
  }
}

module.exports = new FileService();
