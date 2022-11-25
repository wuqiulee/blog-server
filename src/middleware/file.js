const path = require("path");

const Multer = require("koa-multer");
// const Jimp = require('jimp');
const pictureUpload = Multer({
  dest: "./uploads/picture",
});
const pictureHandler = pictureUpload.single("picture");

// const pictureResize = async (ctx, next) => {
//   try {
//     // 1.获取所有的图像信息
//     const files = ctx.req.files;

//     // 2.对图像进行处理(sharp/jimp)
//     for (let file of files) {
//       const destPath = path.join(file.destination, file.filename);
//       console.log(destPath);
//       Jimp.read(file.path).then(image => {
//         image.resize(1280, Jimp.AUTO).write(`${destPath}-large`);
//         image.resize(640, Jimp.AUTO).write(`${destPath}-middle`);
//         image.resize(320, Jimp.AUTO).write(`${destPath}-small`);
//       });
//     }

//     await next();
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = {
  pictureHandler,
  // pictureResize
};
