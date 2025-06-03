const { NestFactory } = require("@nestjs/core");
const AppModule = require("./app.module");

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
