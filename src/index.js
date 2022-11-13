const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const useRoutes = require("./router");
const { APP_PORT } = require("./config");
const { createError } = require("./utils");

// 连接数据库
require("./mysql");

const app = new Koa();

app.useRoutes = useRoutes;

app.use(bodyParser());
app.useRoutes();

// 异常处理
app.on("error", (error, ctx) => {
  createError(error, ctx);
});

app.listen(APP_PORT, () => {
  console.log(`服务器在${APP_PORT}端口启动成功~`);
});
