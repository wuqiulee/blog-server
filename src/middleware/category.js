const categoryService = require("../service/category");
const { CATEGORY_ALREADY_EXISTS } = require("../constants/index");

// 校验分类是否存在 避免重复操作
const verifyCategory = async (ctx, next) => {
  try {
    const { name } = ctx.request.body;
    const res = await categoryService.getCategoryByName(name);
    if (res) {
      const error = new Error(CATEGORY_ALREADY_EXISTS);
      return ctx.app.emit("error", error, ctx);
    }
    await next();
  } catch (err) {
    console.log(err, "查询标签失败");
    ctx.app.emit("error", err, ctx);
  }
};

module.exports = {
  verifyCategory,
};
