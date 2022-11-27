const { createSuccess } = require("../utils");
const logService = require("../service/log");

class SayController {
  // 添加日志
  async create(ctx, next) {
    try {
      const { logDate, content } = ctx.request.body;
      const { user } = ctx.user;
      await logService.create(logDate, content, user);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "添加日志失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取日志列表
  async getList(ctx, next) {
    try {
      const res = await logService.getList();
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取日志列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 更新日志
  async update(ctx, next) {
    try {
      const { logDate, content, id } = ctx.request.body;
      const { user } = ctx.user;
      await logService.update(logDate, content, user, id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "更新日志失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 删除日志
  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      await logService.remove(id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "删除日志失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new SayController();
