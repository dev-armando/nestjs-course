import { Injectable } from '@nestjs/common';
import { ProductEntity } from '../model/product.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  async getAll(): Promise<ProductEntity[]> {
    return await this.productRepository.find();
  }

  async create(product: ProductEntity): Promise<ProductEntity> {
    return await this.productRepository.save(product);
  }

  async getOne(id: any): Promise<ProductEntity> {
    return this.productRepository.findOne(id);
  }

  async update(id: number, product: ProductEntity): Promise<UpdateResult> {
    return await this.productRepository.update(id, product);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }
}
