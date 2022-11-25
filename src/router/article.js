const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { create, getList } = require("../controller/article");

const articleRouter = new Router({ prefix: "/article" });

articleRouter.post("/create", verifyAuth, create);
articleRouter.get("/list", getList);

module.exports = articleRouter;
