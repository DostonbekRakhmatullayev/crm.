import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { ErrorHandle } from './filter/custom.exetepsion.filter';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    cors({
      origin: '*',
      credentials: true,
    }),
  );
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ErrorHandle());

  // const config = app.get(ConfigService);

  // const port = config.getOrThrow<number>('app.port');
  // const host = config.getOrThrow<string>('app.host');

  const config = new DocumentBuilder()
    .setTitle('swagger doc')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, () => {
    console.log(3000);
  });
  // console.log(host + ':' + port);
}
bootstrap();
