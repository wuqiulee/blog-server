const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { create, getList, update, remove } = require("../controller/log");

const sayRouter = new Router({ prefix: "/log" });

// 添加日志
sayRouter.post("/create", verifyAuth, create);

// 获取日志列表
sayRouter.get("/list", getList);

// 更新日志
sayRouter.post("/update", verifyAuth, update);

// 删除日志
sayRouter.post("/delete", verifyAuth, remove);

module.exports = sayRouter;
