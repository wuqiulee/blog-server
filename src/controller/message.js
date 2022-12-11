const { createSuccess } = require("../utils");
const messageService = require("../service/message");
const { Role } = require("../constants");

class MessageController {
  // 添加留言
  async create(ctx, next) {
    try {
      const params = ctx.request.body;
      params.role = ctx.user?.role || Role.NormalUser;
      await messageService.create(params);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "添加留言失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 回复留言
  async reply(ctx, next) {
    try {
      const params = ctx.request.body;
      await messageService.reply(params);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "回复留言失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取留言列表
  async getList(ctx, next) {
    try {
      const { pageNum, pageSize } = ctx.request.query;
      const res = await messageService.getList(pageNum, pageSize);
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取留言列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 删除留言
  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      await messageService.remove(id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "删除留言失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new MessageController();
