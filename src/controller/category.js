const { createSuccess } = require("../utils");
const categoryService = require("../service/category");

class CategoryController {
  async create(ctx, next) {
    try {
      const { name } = ctx.request.body;
      const { user } = ctx.user;
      await categoryService.create(name, user);
      createSuccess(ctx);
    } catch (err) {
      console.log(err, "创建标签失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new CategoryController();
