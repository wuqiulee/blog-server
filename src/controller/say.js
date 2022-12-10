const { createSuccess } = require("../utils");
const sayService = require("../service/say");

class SayController {
  // 发表说说
  async publish(ctx, next) {
    try {
      const { content } = ctx.request.body;
      const { user } = ctx.user;
      await sayService.publish(content, user);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "发表所说失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取说说列表
  async getList(ctx, next) {
    try {
      const { pageNum, pageSize } = ctx.request.query;
      const res = await sayService.getList(pageNum, pageSize);
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取说说列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 更新说说
  async update(ctx, next) {
    try {
      const { content, id } = ctx.request.body;
      const { user } = ctx.user;
      await sayService.update(content, user, id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "更新说说失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 删除说说
  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      await sayService.remove(id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "删除说说失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new SayController();
