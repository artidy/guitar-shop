import { Injectable } from '@nestjs/common';
import { Product } from '@guitar-shop/shared-types';

import { GuitarRepository } from './guitar.repository';
import { CreateGuitarDto } from './dto/create-guitar.dto';
import { GuitarEntity } from './guitar.entity';
import { UpdateGuitarDto } from './dto/update-guitar.dto';

@Injectable()
export class GuitarService {
  constructor(
    private readonly guitarRepository: GuitarRepository
  ) {}

  public async create(dto: CreateGuitarDto): Promise<Product> {

    return this.guitarRepository.create(new GuitarEntity({
      ...dto,
      createdAt: null
    }));
  }

  public async update(id: number, dto: UpdateGuitarDto): Promise<Product | null> {
    const guitar = await this.guitarRepository.findById(id);

    return this.guitarRepository.update(id, new GuitarEntity({
      ...guitar,
      ...dto
    }));
  }

  public async findById(id: number): Promise<Product | null> {
    return this.guitarRepository.findById(id);
  }

  public async findByIds(ids: number[]): Promise<Product[]> {
    return this.guitarRepository.findByIds(ids);
  }

  public async findAll(): Promise<Product[]> {
    return this.guitarRepository.findAll();
  }

  public async delete(id: number): Promise<void> {
    return this.guitarRepository.destroy(id);
  }
}
