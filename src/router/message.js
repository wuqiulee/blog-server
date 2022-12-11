const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { create, reply, getList, remove } = require("../controller/message");

const messageRouter = new Router({ prefix: "/message" });

// 添加留言
messageRouter.post("/create", create);

// 回复留言
messageRouter.post("/reply", reply);

// 获取留言列表
messageRouter.get("/list", getList);

// 删除留言
messageRouter.post("/delete", verifyAuth, remove);

module.exports = messageRouter;
