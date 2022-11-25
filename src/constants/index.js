const NAME_OR_PASSWORD_IS_REQUIRED = "name_or_password_is_required";
const USER_OR_PASSWORD_ERROR = "user_or_password_error";
const UNAUTHORIZATION = "UNAUTHORIZATION";
const UNPERMISSION = "unpermission";
const CATEGORY_ALREADY_EXISTS = "category_already_exists";
const TAg_ALREADY_EXISTS = "tag_already_exists";

// 错误信息
const ErrorMessage = {
  [NAME_OR_PASSWORD_IS_REQUIRED]: "用户名和者密码不能为空~",
  [USER_OR_PASSWORD_ERROR]: "用户名或密码错误~",
  [UNAUTHORIZATION]: "无效的token~",
  [UNPERMISSION]: "您不具备操作权限~",
  [CATEGORY_ALREADY_EXISTS]: "分类已存在~",
  [TAg_ALREADY_EXISTS]: "标签已存在~",
};

const ErrorStatus = {
  [NAME_OR_PASSWORD_IS_REQUIRED]: 400,
  [USER_OR_PASSWORD_ERROR]: 400,
  [UNAUTHORIZATION]: 401,
  [UNPERMISSION]: 401,
};

const ErrorCode = {
  [NAME_OR_PASSWORD_IS_REQUIRED]: 400,
  [USER_OR_PASSWORD_ERROR]: 400,
  [UNAUTHORIZATION]: 401,
  [UNPERMISSION]: 401,
  [CATEGORY_ALREADY_EXISTS]: 1001,
  [TAg_ALREADY_EXISTS]: 2001,
};

// 角色权限
const Role = {
  Admin: 0,
  NormalUser: 1,
};

const PICTURE_PATH = "./uploads/picture";

module.exports = {
  NAME_OR_PASSWORD_IS_REQUIRED,
  USER_OR_PASSWORD_ERROR,
  UNAUTHORIZATION,
  UNPERMISSION,
  CATEGORY_ALREADY_EXISTS,
  TAg_ALREADY_EXISTS,
  ErrorMessage,
  ErrorStatus,
  ErrorCode,
  Role,
  PICTURE_PATH,
};
