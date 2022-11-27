const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { verifyCategory } = require("../middleware/category");
const { create, getList, remove, update } = require("../controller/category");

const categoryRouter = new Router({ prefix: "/category" });

// 创建分类
categoryRouter.post("/create", verifyAuth, verifyCategory, create);

// 获取分类列表
categoryRouter.get("/list", getList);

// 删除分类
categoryRouter.post("/delete", verifyAuth, remove);

// 更新分类
categoryRouter.post("/update", verifyAuth, update);

module.exports = categoryRouter;
