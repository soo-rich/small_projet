import { Column, Entity } from 'typeorm';
import { Common_entity } from '../../common/entities/common_entity';

@Entity('kits')
export class Kit extends Common_entity {
  @Column({ default: true })
  isActive: boolean;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'simple-array', nullable: true })
  features: string[] | null;
}
