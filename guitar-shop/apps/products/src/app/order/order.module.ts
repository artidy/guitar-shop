import { Module } from '@nestjs/common';

import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { OrderService } from './order.service';
import { GuitarService } from '../guitar/guitar.service';

@Module({
  controllers: [OrderController],
  providers: [OrderRepository, OrderService, GuitarService]
})
export class OrderModule {}
