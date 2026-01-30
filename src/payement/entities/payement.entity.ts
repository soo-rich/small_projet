import { Common_entity } from '../../common/entities/common_entity';
import { Entity } from 'typeorm';

@Entity('payement')
export class Payement extends Common_entity{
  quantity: number;
  kitId: string;
}
