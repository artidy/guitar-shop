import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { UsersService } from '../users/users.service';

@Module({
  imports: [HttpModule],
  controllers: [CommentsController],
  providers: [CommentsService, UsersService],
})
export class CommentsModule {}
