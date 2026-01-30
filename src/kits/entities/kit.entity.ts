import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kits')
export class Kit {
  @PrimaryGeneratedColumn()
  id: number;

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
