import type { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { PrismaModel } from "src/_gen/prisma-class";

export function setupSwagger(app: INestApplication): void {
    const config = new DocumentBuilder()
    .setTitle('Peniel')
    .setDescription('Sistema de gerenciamento de consultas')
    .setVersion('1.0')
    .addTag('Pessoa')
    .addTag('Médico')
    .addTag('Padrao')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [...PrismaModel.extraModels],
  });
  SwaggerModule.setup('api', app, document);
}