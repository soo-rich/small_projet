import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PayementService } from './payement.service';
import { CreatePayementDto } from './dto/create-payement.dto';

@Controller('payement')
export class PayementController {
  constructor(private readonly payementService: PayementService) {}

  @Post()
  create(@Body() createPayementDto: CreatePayementDto) {
    return this.payementService.create(createPayementDto);
  }

  @Get()
  findAll() {
    return this.payementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payementService.findOne(+id);
  }
}
