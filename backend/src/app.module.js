const { Module } = require("@nestjs/common");
const { TypeOrmModule } = require("@nestjs/typeorm");
const { User } = require("./entities/user.entity");
const { Store } = require("./entities/store.entity");
const path = require("path");
const { Rating } = require("./entities/rating.entity");

TypeOrmModule.forRoot({
  entities: [Store, User, Rating],
  // ... other config
});

// Create module without decorator
const AppModule = Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "ishwar123",
      password: "ishwar123",
      database: "store_rating_db",
      entities: [path.join(__dirname, "**/*.entity{.js,.ts}")],
      entities: [User, Store, Rating],
      synchronize: true,
    }),
  ],
})(class {});

module.exports = { AppModule };
