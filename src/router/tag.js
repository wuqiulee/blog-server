const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { verifyTag } = require("../middleware/tag");
const { create, getList } = require("../controller/tag");

const tagRouter = new Router({ prefix: "/tag" });

tagRouter.post("/create", verifyAuth, verifyTag, create);
tagRouter.get("/list", getList);

module.exports = tagRouter;
