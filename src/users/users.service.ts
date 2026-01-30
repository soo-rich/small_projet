import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto, file: Express.Multer.File) {
    console.log(file);
    return this.usersRepository.save({
      ...createUserDto,
      avatar: file?.path,
      isActive: true,
    });
  }

  findAll() {
    return this.usersRepository.find({
      where: { isActive: true },
    });
  }

  findOne(id: string) {
    return this.usersRepository.findOne({
      where: { id, isActive: true },
    });
  }

  update(id: string, updateUserDto: UpdateUserDto, file?: Express.Multer.File) {
    return this.usersRepository.update(id, {
      ...updateUserDto,
      avatar: file ? file.path : undefined,
    });
  }

  remove(id: string) {
    return this.usersRepository.update(id, { isActive: false });
  }
}
