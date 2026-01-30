import { Injectable } from '@nestjs/common';
import { CreatePayementDto } from './dto/create-payement.dto';
import { FedaPay, Transaction } from 'fedapay';
import { User } from '../users/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Kit } from '../kits/entities/kit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PayementService {
  constructor(
    @InjectRepository(Kit)
    private kitRepository: Repository<Kit>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async create(createPayementDto: CreatePayementDto) {
    const { quantity, kitId } = createPayementDto;

    const kit = await this.kitRepository.findOne({ where: { id: kitId } });
    if (!kit) {
      throw new Error('Kit not found');
    }

    const user = await this.userRepository.findOne({
      where: { id: createPayementDto.userId },
    });
    if (!user) {
      throw new Error('User not found');
    }
    const transactionAmount = quantity * kit.price; // Assuming each kit costs 5000 XOF
    return this.initiatePayment(transactionAmount, user, kitId);
  }

  findAll() {
    return `This action returns all payement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payement`;
  }

  async initiatePayment(amount: number, user: User, KitId: string) {
    FedaPay.setApiKey('YOUR_SECRET_API_KEY');
    FedaPay.setEnvironment('sandbox');

    return await Transaction.create({
      description: 'Payment for order #' + KitId,
      amount,
      currency: { iso: 'XOF' },
      callback_url: 'http://localhost:3000/payement/callback',
      mode: 'mtn_open',
      customer: {
        first_name: user.firstName,
        last_name: user.lastName,
        email: user.email,
      },
    });
  }
}
