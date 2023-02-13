import { Injectable } from '@nestjs/common';
import { CRUDRepository } from '@guitar-shop/core';
import { Comment } from '@guitar-shop/shared-types';

import { PrismaService } from '../prisma/prisma.service';
import { CommentEntity } from './comment.entity';

@Injectable()
export class CommentRepository implements CRUDRepository<CommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) {}

  public async create(commentEntity: CommentEntity): Promise<Comment> {
    const comment = commentEntity.toObject();

    return this.prisma.comment.create({ data: { ...comment } });
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.comment.delete({ where: { id }});
  }

  public async findById(id: number): Promise<Comment | null> {
    return this.prisma.comment.findFirst({ where: { id } });
  }

  public async findAll(productId: number): Promise<Comment[]> {
    return this.prisma.comment.findMany({ where: { productId } });
  }

  public async update(id: number, commentEntity: CommentEntity): Promise<Comment> {
    const comment = commentEntity.toObject();

    return this.prisma.comment.update({
      where: {
        id
      },
      data: { ...comment }
    });
  }
}
