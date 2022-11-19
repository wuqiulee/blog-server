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
}

module.exports = new SayController();
