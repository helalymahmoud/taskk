import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphQLExceptisonFilter } from './Exception/graphql-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.useGlobalFilters(new GraphQLExceptisonFilter());

  const configSevice =app.get(ConfigService);
  const port =configSevice.get<number>("APP_PORT")
  await app.listen(port);
}
bootstrap();
  