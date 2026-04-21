import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: true,
    credentials: true,
  });
  
  const config = new DocumentBuilder()
    .setTitle('Lost and Found API')
    .setDescription('API documentation for the Lost and Found system')
    .setVersion('1.0')
    .addTag('lostnfound')
    .build();

  const documentFactory = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3001);

  //   console.log(`Application is running on: http://localhost:3000`);
  //   console.log(`Swagger docs available at: http://localhost:3000/api`);
}
bootstrap();
