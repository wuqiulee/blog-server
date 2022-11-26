const { createSuccess } = require("../utils");
const tagService = require("../service/tag");

class TagController {
  // 创建标签
  async create(ctx, next) {
    try {
      const { name } = ctx.request.body;
      const { user } = ctx.user;
      await tagService.create(name, user);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "创建标签失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取标签列表
  async getList(ctx, next) {
    try {
      const res = await tagService.getList();
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取标签列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new TagController();
