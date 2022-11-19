const Router = require("koa-router");
const { verifyAuth } = require("../middleware/auth");
const { publish } = require("../controller/say");

const sayRouter = new Router({ prefix: "/say" });

sayRouter.post("/publish", verifyAuth, publish);

module.exports = sayRouter;
