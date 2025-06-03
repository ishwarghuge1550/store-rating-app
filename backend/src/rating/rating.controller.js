const { Controller, Post, Body, UseGuards, Req } = require('@nestjs/common');
const { RatingService } = require('./rating.service');
const { JwtAuthGuard } = require('../auth/jwt-auth.guard');

@Controller('ratings')
class RatingController {
  constructor(private ratingService: RatingService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async rateStore(@Body() ratingData, @Req() req) {
    return this.ratingService.rateStore({
      ...ratingData,
      userId: req.user.id,
    });
  }
}

module.exports = { RatingController };