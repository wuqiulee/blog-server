const Router = require("koa-router");
const { verifyLogin, verifyAuth } = require("../middleware/auth");
const { login } = require("../controller/auth");

const authRouter = new Router();

authRouter.post("/login", verifyLogin, login);

module.exports = authRouter;
