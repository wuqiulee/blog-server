const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { publish, getList, update, remove } = require("../controller/say");

const sayRouter = new Router({ prefix: "/say" });

// 发表说说
sayRouter.post("/publish", verifyAuth, publish);

// 获取说说列表
sayRouter.get("/list", getList);

// 更新说说
sayRouter.post("/update", verifyAuth, update);

// 删除说说
sayRouter.post("/delete", verifyAuth, remove);

module.exports = sayRouter;
