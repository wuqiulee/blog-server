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
      const res = await categoryService.getList();
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取分类列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 删除分类
  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      await categoryService.remove(id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "删除分类失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 更新分类
  async update(ctx, next) {
    try {
      const { name, id } = ctx.request.body;
      await categoryService.update(name, id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "更新分类失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new CategoryController();
