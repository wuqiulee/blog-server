const Router = require("koa-router");
const fs = require("fs");

const { verifyAuth } = require("../middleware/auth");
const { pictureHandler } = require("../middleware/file");
const { savePicture, getPicture } = require("../controller/file");

const fileRouter = new Router({ prefix: "/upload" });

fileRouter.post("/picture", verifyAuth, pictureHandler, savePicture);
fileRouter.get("/picture", getPicture);

module.exports = fileRouter;
