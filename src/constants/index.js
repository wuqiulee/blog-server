const NAME_OR_PASSWORD_IS_REQUIRED = "name_or_password_is_required";
const USER_OR_PASSWORD_ERROR = "user_or_password_error";
const UNAUTHORIZATION = "UNAUTHORIZATION";
const UNPERMISSION = "unpermission";

const ErrorMessage = {
  [NAME_OR_PASSWORD_IS_REQUIRED]: "用户名和者密码不能为空~",
  [USER_OR_PASSWORD_ERROR]: "用户名或密码错误~",
  [UNAUTHORIZATION]: "无效的token~",
  [UNPERMISSION]: "您不具备操作权限~",
};

const ErrorStatus = {
  [NAME_OR_PASSWORD_IS_REQUIRED]: 400,
  [USER_OR_PASSWORD_ERROR]: 400,
  [UNAUTHORIZATION]: 401,
  [UNPERMISSION]: 401,
};

module.exports = {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_OR_PASSWORD_ERROR,
  UNAUTHORIZATION,
  UNPERMISSION,
  ErrorMessage,
  ErrorStatus,
};
