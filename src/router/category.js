const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { verifyCategory } = require("../middleware/category");
const { create, getList } = require("../controller/category");

const categoryRouter = new Router({ prefix: "/category" });

categoryRouter.post("/create", verifyAuth, verifyCategory, create);
categoryRouter.get("/list", getList);

module.exports = categoryRouter;
