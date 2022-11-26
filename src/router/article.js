const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const {
  create,
  getList,
  update,
  query,
  remove,
} = require("../controller/article");

const articleRouter = new Router({ prefix: "/article" });

// 创建文章
articleRouter.post("/create", verifyAuth, create);

// 获取文章列表
articleRouter.get("/list", getList);

// 更新文章
articleRouter.post("/update", verifyAuth, update);

// 查询文章
articleRouter.get("/query", query);

// 删除文章
articleRouter.post("/delete", verifyAuth, remove);

module.exports = articleRouter;
