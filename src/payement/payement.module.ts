import { Module } from '@nestjs/common';
import { PayementService } from './payement.service';
import { PayementController } from './payement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payement } from './entities/payement.entity';
import { Kit } from '../kits/entities/kit.entity';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Payement, Kit, User])],
  controllers: [PayementController],
  providers: [PayementService],
})
export class PayementModule {}
