import { Module } from '@nestjs/common';

import { GuitarController } from './guitar.controller';
import { GuitarRepository } from './guitar.repository';
import { GuitarService } from './guitar.service';

@Module({
  controllers: [GuitarController],
  providers: [GuitarRepository, GuitarService]
})
export class GuitarModule {}
