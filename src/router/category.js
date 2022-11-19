const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { verifyCategory } = require("../middleware/category");
const { create } = require("../controller/category");

const categoryRouter = new Router({ prefix: "/category" });

categoryRouter.post("/create", verifyAuth, verifyCategory, create);

module.exports = categoryRouter;
