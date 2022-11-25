const fs = require("fs");
const fileService = require("../service/file");
const { createSuccess } = require("../utils");
const { PICTURE_PATH } = require("../constants");

class FileController {
  // 上传图片
  async savePicture(ctx, next) {
    try {
      // 获取图片相关的信息
      const { filename, mimetype, size } = ctx.req.file;
      const { user } = ctx.user;

      // 2.将图像信息数据保存到数据库中
      await fileService.createPicture(filename, mimetype, size, user);

      createSuccess(ctx, {
        filename,
        mimetype,
      });
    } catch (err) {
      console.log(err, "上传图片失败");
      ctx.app.emit("error", err, ctx);
    }
  }

  // 获取图片
  async getPicture(ctx, next) {
    try {
      const { filename, mimetype } = ctx.request.query;
      ctx.response.set("content-type", mimetype);
      ctx.body = fs.createReadStream(`${PICTURE_PATH}/${filename}`);
    } catch (err) {
      console.log(err, "获取图片失败");
      ctx.app.emit("error", err, ctx);
    }
  }
}

module.exports = new FileController();
