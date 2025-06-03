const { Module } = require("@nestjs/common");
const { TypeOrmModule } = require("@nestjs/typeorm");
const { User } = require("../entities/user.entity");
const { AuthService } = require("./auth.service");
const { AuthController } = require("./auth.controller");
const { JwtModule } = require("@nestjs/jwt");
const { JwtStrategy } = require("./jwt.strategy");

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: "your-secret-key",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
class AuthModule {}

module.exports = { AuthModule };
