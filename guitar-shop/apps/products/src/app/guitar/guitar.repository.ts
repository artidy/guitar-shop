import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@guitar-shop/core';
import { Product } from '@guitar-shop/shared-types';

import { GuitarEntity } from './guitar.entity';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GuitarRepository implements CRUDRepository<GuitarEntity, number, Product> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(guitarEntity: GuitarEntity): Promise<Product> {
    const guitar = guitarEntity.toObject();

    return this.prisma.product.create({
      data: { ...guitar },
      include: { comments: true }
    });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.product.delete({ where: { id }});
  }

  public async findById(id: number): Promise<Product | null> {
    return this.prisma.product.findFirst({ where: { id } });
  }

  public async findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  public async update(id: number, guitarEntity: GuitarEntity): Promise<Product> {
    const guitar = guitarEntity.toObject();
    return this.prisma.product.update({
      where: {
        id
      },
      data: { ...guitar },
      include: { comments: true }
    });
  }
}
