import { Injectable } from '@nestjs/common';
import { Comment } from '@guitar-shop/shared-types';

import { CommentEntity } from './comment.entity';
import { CommentRepository } from './comment.repository';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepository: CommentRepository
  ) {}

  public async create(dto: CreateCommentDto, userId: string): Promise<Comment> {

    return this.commentRepository.create(new CommentEntity({
      ...dto,
      userId: userId,
      createdAt: null
    }));
  }

  public async update(id: number, dto: UpdateCommentDto): Promise<Comment | null> {
    const comment = await this.commentRepository.findById(id);

    return this.commentRepository.update(id, new CommentEntity({
      ...comment,
      ...dto
    }));
  }

  public async findById(id: number): Promise<Comment | null> {
    return this.commentRepository.findById(id);
  }

  public async findAll(productId: number): Promise<Comment[]> {
    return this.commentRepository.findAll(productId);
  }

  public async delete(id: number): Promise<void> {
    return this.commentRepository.destroy(id);
  }
}
