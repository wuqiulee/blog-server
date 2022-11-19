const jwt = require("jsonwebtoken");
const { PRIVATE_KEY } = require("../config");
const { createSuccess } = require("../utils");

class AuthController {
  async login(ctx, next) {
    const { user, role, password } = ctx.user;
    const token = jwt.sign({ user, password }, PRIVATE_KEY, {
      expiresIn: "7d",
      algorithm: "RS256",
    });
    createSuccess(ctx, { user, role, token });
  }
}

module.exports = new AuthController();
