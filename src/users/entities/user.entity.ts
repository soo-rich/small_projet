import { Column, Entity } from 'typeorm';
import { Common_entity } from '../../common/entities/common_entity';

@Entity('utilisateur')
export class User extends Common_entity {
  @Column({ nullable: true })
  avatar: string;
  @Column()
  username: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  isActive: boolean;
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}
