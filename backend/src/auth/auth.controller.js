const { Controller } = require("@nestjs/common");
const { AuthService } = require("./auth.service");

class AuthController {
  constructor(authService) {
    this.authService = authService;
  }

  async login(req) {
    return this.authService.login(req.body);
  }

  async register(req) {
    return this.authService.register(req.body);
  }

  async signup(req) {
    return this.authService.signup(req.body);
  }
}

// Manual route configuration
AuthController.routes = [
  {
    method: "post",
    path: "login",
    handler: "login",
  },
  {
    method: "post",
    path: "register",
    handler: "register",
  },
  {
    method: "post",
    path: "signup",
    handler: "signup",
  },
];

module.exports = AuthController;
