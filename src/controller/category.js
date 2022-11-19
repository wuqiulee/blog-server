const { createSuccess } = require("../utils");
const categoryService = require("../service/category");

class CategoryController {
  // 创建分类
  async create(ctx, next) {
    try {
      const { name } = ctx.request.body;
      const { user } = ctx.user;
      await categoryService.create(name, user);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "创建分类失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取分类列表
  async getList(ctx, next) {
    try {
      const { pageNum, pageSize } = ctx.request.query;
      const res = await categoryService.getList(pageNum, pageSize);
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取所有分类失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new CategoryController();
