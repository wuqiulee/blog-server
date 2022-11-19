const crypto = require("crypto");
const { ErrorMessage, ErrorStatus, ErrorCode } = require("../constants");
const createSuccess = (ctx, data) => {
  ctx.status = 200;
  ctx.body = {
    ...(data && { data }),
    code: 0,
    message: "success~",
  };
};

const createError = (error, ctx) => {
  ctx.status = ErrorStatus[error.message] || 500;
  ctx.body = {
    code: ErrorCode[error.message] || -1,
    message: ErrorMessage[error.message] || error.message,
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
