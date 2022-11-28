const { createSuccess } = require("../utils");
const articleService = require("../service/article");

class ArticleController {
  // 添加文章
  async create(ctx, next) {
    try {
      const params = ctx.request.body;
      const { user } = ctx.user;
      params.tag = params.tag.join(";");
      await articleService.create(params, user);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "添加文章失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取文章列表
  async getList(ctx, next) {
    try {
      const res = await articleService.getList();
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取文章列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 更新文章
  async update(ctx, next) {
    try {
      const params = ctx.request.body;
      params.tag = params.tag.join(";");
      await articleService.update(params);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "更新文章失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 查询文章
  async query(ctx, next) {
    try {
      const params = ctx.request.query;
      const field = Object.keys(params)[0];
      const res = await articleService.query(field, params[field]);
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "查询文章失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 删除文章
  async remove(ctx, next) {
    try {
      const { id } = ctx.request.body;
      await articleService.remove(id);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "删除文章失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new ArticleController();
