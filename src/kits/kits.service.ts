import { Injectable } from '@nestjs/common';
import { CreateKitDto } from './dto/create-kit.dto';
import { UpdateKitDto } from './dto/update-kit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kit } from './entities/kit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KitsService {
  constructor(
    @InjectRepository(Kit)
    private readonly kitRepository: Repository<Kit>,
  ) {}

  create(createKitDto: CreateKitDto) {
    return this.kitRepository.create(createKitDto);
  }

  findAll() {
    return `This action returns all kits`;
  }

  findOne(id: string) {
    return this.kitRepository.findOneBy({ id });
  }

  update(id: string, updateKitDto: UpdateKitDto) {
    return this.kitRepository.update(
      {
        id,
      },
      updateKitDto,
    );
  }

  remove(id: string) {
    return this.kitRepository.update({ id }, { isActive: false });
  }
}
