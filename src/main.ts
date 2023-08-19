import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/setupswagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  setupSwagger(app);

  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
  });

  await app.listen(3000);

}
bootstrap();
