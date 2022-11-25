const tagService = require("../service/tag");
const { TAg_ALREADY_EXISTS } = require("../constants/index");

// 校验标签是否存在 避免重复操作
const verifyTag = async (ctx, next) => {
  try {
    const { name } = ctx.request.body;
    const res = await tagService.getTagByName(name);
    if (res) {
      const error = new Error(TAg_ALREADY_EXISTS);
      return ctx.app.emit("error", error, ctx);
    }
    await next();
  } catch (err) {
    console.log(err, "查询标签失败");
    ctx.app.emit("error", err, ctx);
  }
};

module.exports = {
  verifyTag,
};
