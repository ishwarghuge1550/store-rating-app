const { Module } = require("@nestjs/common");
const { TypeOrmModule } = require("@nestjs/typeorm");
const { Rating } = require("../entities/rating.entity");
const { RatingService } = require("./rating.service");
const { RatingController } = require("./rating.controller");
const { User } = require("../entities/user.entity");
const { Store } = require("../entities/store.entity");

@Module({
  imports: [TypeOrmModule.forFeature([Rating, User, Store])],
  providers: [RatingService],
  controllers: [RatingController],
})
class RatingModule {}

module.exports = { RatingModule };
