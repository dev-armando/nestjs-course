import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product/controller/product.controller';
import { ProductService } from './product/service/product.service';
import { ProductEntity } from './product/model/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity]),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'mydb',
      entities: [ProductEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ProductController],
  providers: [AppService, ProductService],
})
export class AppModule {}
