import { Module } from '@nestjs/common';
import { KitsService } from './kits.service';
import { KitsController } from './kits.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Kit } from './entities/kit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Kit])],
  controllers: [KitsController],
  providers: [KitsService],
})
export class KitsModule {}
