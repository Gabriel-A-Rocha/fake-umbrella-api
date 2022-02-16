import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateCustomerDto } from './create-customer.dto';

@Controller('customers')
export class CustomersController {
  @Post()
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    return createCustomerDto;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return { id };
  }

  @Get()
  async findAll() {
    return ['customer A', 'customer B'];
  }
}
