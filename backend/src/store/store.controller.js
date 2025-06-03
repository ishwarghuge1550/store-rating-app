const { Controller, Get, Post, Body, UseGuards, Req } = require('@nestjs/common');
const { StoreService } = require('./store.service');
const { JwtAuthGuard } = require('../auth/jwt-auth.guard');
const { Roles } = require('../auth/roles.decorator');
const { UserRole } = require('../entities/user.entity');

@Controller('stores')
class StoreController {
  constructor(private storeService: StoreService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return this.storeService.findAll();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  async create(@Body() storeData, @Req() req) {
    return this.storeService.create(storeData, req.user.id);
  }
}

module.exports = { StoreController };