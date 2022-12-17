const connection = require("../mysql");

class MessageService {
  // 添加留言
  async create(params) {
    const { nickName, email, avatar = null, content, role } = params;
    const statement = `INSERT INTO message (nickName, email, avatar, content, role) VALUES (?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [
      nickName,
      email,
      avatar,
      content,
      role,
    ]);
    return result[0];
  }

  // 回复留言
  async reply(params) {
    const { nickName, email, avatar = null, content, replyId } = params;
    const statement = `INSERT INTO message (nickName, email, avatar, content, replyId) VALUES (?, ?, ?, ?, ?);`;
    const result = await connection.execute(statement, [
      nickName,
      email,
      avatar,
      content,
      replyId,
    ]);
    return result[0];
  }

  // 获取留言列表
  async getList(pageNum = 0, pageSize = 1000) {
    const offset = pageNum * pageSize;
    const statement = `SELECT id, nickName, avatar, content, replyId, createAt AS createTime FROM message ORDER BY createTime DESC`;
    const [result] = await connection.execute(statement);
    const msgArr = result.filter((v) => !v.replyId);
    const total = msgArr.length;
    result.forEach((msg) => {
      if (msg.replyId) {
        const ret = msgArr.find((v) => v.id === msg.replyId);
        if (ret.children) {
          ret.children.unshift(msg);
        } else {
          ret.children = [msg];
        }
      }
    });
    const msgList = msgArr.splice(offset, pageSize);
    return {
      result: msgList,
      pageNum: Number(pageNum) + 1,
      pageSize: Number(pageSize),
      total,
    };
  }

  // 删除留言
  async remove(id) {
    const statement = `DELETE FROM message WHERE id = ?`;
    const [result] = await connection.execute(statement, [id]);
    return result;
  }
}

module.exports = new MessageService();
