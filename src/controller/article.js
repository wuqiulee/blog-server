const { createSuccess } = require("../utils");
const articleService = require("../service/article");

class ArticleController {
  // 添加文章
  async create(ctx, next) {
    try {
      const params = ctx.request.body;
      const { user } = ctx.user;
      params.category = params.category.join(";");
      params.tag = params.tag.join(";");
      await articleService.create(params, user);
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
      const res = await articleService.getList(pageNum, pageSize);
      createSuccess(ctx, res);
    } catch (err) {
      console.log(err, "获取分类列表失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new ArticleController();
