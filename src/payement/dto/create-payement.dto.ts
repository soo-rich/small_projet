import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsUUID } from 'class-validator';

export class CreatePayementDto {
  @ApiProperty({
    description: 'The ID of the kit being purchased',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  kitId: string;
  @ApiProperty({
    description: 'The ID of the kit being purchased',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsUUID()
  userId: string;
  @ApiProperty({
    description: 'The quantity of kits being purchased',
    example: 2,
  })
  @IsInt()
  quantity: number;
}
