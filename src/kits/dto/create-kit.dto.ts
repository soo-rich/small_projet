import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateKitDto {
  @ApiProperty({ example: 'Starter Kit', description: 'The name of the kit' })
  @IsString({ message: 'Name must be a string' })
  name: string;

  @ApiProperty({ example: 29.99, description: 'The price of the kit' })
  @IsNumber(
    {
      allowNaN: false,
      allowInfinity: false,
      maxDecimalPlaces: 2,
    },
    { message: 'Price must be a number' },
  )
  price: number;

  @ApiProperty({
    example: 'A basic starter kit for beginners',
    description: 'The description of the kit',
    required: false,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    example: ['Feature 1', 'Feature 2'],
    description: 'The features included in the kit',
    required: false,
    type: [String],
  })
  @IsArray({
    each: true,
    message: 'Each feature must be a string',
  })
  features?: string[];
}
