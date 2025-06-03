const { TypeOrmModule } = require("@nestjs/typeorm");
const { User } = require("./entities/user.entity");
const { Store } = require("./entities/store.entity");
const { Rating } = require("./entities/rating.entity");

module.exports = {
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "your_username",
      password: "your_password",
      database: "store_rating_db",
      entities: [User, Store, Rating],
      synchronize: true, // In development only
    }),
    // ... other modules
  ],
};
