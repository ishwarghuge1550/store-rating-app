const { Module } = require("@nestjs/common");
const { TypeOrmModule } = require("@nestjs/typeorm");
const { Store } = require("../entities/store.entity");
const { StoreService } = require("./store.service");
const { StoreController } = require("./store.controller");
const { User } = require("../entities/user.entity");

@Module({
  imports: [TypeOrmModule.forFeature([Store, User])],
  providers: [StoreService],
  controllers: [StoreController],
})
class StoreModule {}

module.exports = { StoreModule };
