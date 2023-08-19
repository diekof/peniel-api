import { HttpAdapterHost,  NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/setupswagger';
import { AllExceptionsFilter } from './common/exception/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  setupSwagger(app);

  app.enableCors({
    origin: true,
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS',
    credentials: true,
  });

  await app.listen(3000);

}
bootstrap();
