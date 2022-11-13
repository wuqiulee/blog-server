const crypto = require("crypto");
const { ErrorMessage, ErrorStatus } = require("../constants");
const createSuccess = (ctx, data) => {
  ctx.status = 200;
  ctx.body = {
    data,
    code: 200,
    message: "success~",
  };
};

const createError = (error, ctx) => {
  ctx.status = ErrorStatus[error.message];
  ctx.body = {
    code: ErrorStatus[error.message],
    message: ErrorMessage[error.message],
  };
};

const md5password = (password) => {
  const md5 = crypto.createHash("md5");
  const result = md5.update(password).digest("hex");
  return result;
};

module.exports = {
  createError,
  md5password,
  createSuccess,
};
