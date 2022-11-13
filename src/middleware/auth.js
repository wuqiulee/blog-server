const jwt = require("jsonwebtoken");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_OR_PASSWORD_ERROR,
  UNPERMISSION,
  UNAUTHORIZATION,
} = require("../constants");
const { getUserByName } = require("../service/user");
const { md5password } = require("../utils");
const { PUBLIC_KEY } = require("../config");

// 登录校验
const verifyLogin = async (ctx, next) => {
  console.log("验证登录的middleware~");

  const { user: username, password } = ctx.request.body;

  // 判断用户名和密码是否为空
  if (!username || !password) {
    const error = new Error(NAME_OR_PASSWORD_IS_REQUIRED);
    return ctx.app.emit("error", error, ctx);
  }

  const user = await getUserByName(username);

  // 判断用户名和密码是否正确(加密)
  if (!user[0] || md5password(password) !== user[0].password) {
    const error = new Error(USER_OR_PASSWORD_ERROR);
    return ctx.app.emit("error", error, ctx);
  }

  ctx.user = user[0];
  await next();
};

// 权限校验
const verifyAuth = async (ctx, next) => {
  console.log("验证授权的middleware~");
  // 获取token
  const authorization = ctx.headers.authorization;
  if (!authorization) {
    const error = new Error(UNPERMISSION);
    return ctx.app.emit("error", error, ctx);
  }
  const token = authorization.replace("Bearer ", "");

  // .验证token
  try {
    const result = jwt.verify(token, "PUBLIC_KEY", {
      algorithms: ["RS256"],
    });
    ctx.user = result;
    await next();
  } catch (err) {
    const error = new Error(UNAUTHORIZATION);
    ctx.app.emit("error", error, ctx);
  }
};

module.exports = {
  verifyLogin,
  verifyAuth,
};
