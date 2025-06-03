const { Controller, Get, Post, Body, UseGuards } = require("@nestjs/common");
const { AuthGuard } = require("@nestjs/passport");
const { RolesGuard } = require("../auth/roles.guard");
const { Roles } = require("../auth/roles.decorator");
const { UserRole } = require("../entities/user.entity");

@Controller("stores")
class StoresController {
  constructor(storesService) {
    this.storesService = storesService;
  }

  @Get()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  async findAll() {
    return this.storesService.findAll();
  }

  @Post()
  @UseGuards(AuthGuard("jwt"), RolesGuard)
  @Roles(UserRole.ADMIN)
  async create(@Body() store) {
    return this.storesService.create(store);
  }
}

module.exports = StoresController;
