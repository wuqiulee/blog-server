const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { verifyTag } = require("../middleware/tag");
const { create, getList, remove, update } = require("../controller/tag");

const tagRouter = new Router({ prefix: "/tag" });

// 创建标签
tagRouter.post("/create", verifyAuth, verifyTag, create);

// 获取标签列表
tagRouter.get("/list", getList);

// 删除标签
tagRouter.post("/delete", verifyAuth, remove);

// 更新标签
tagRouter.post("/update", verifyAuth, update);

module.exports = tagRouter;
