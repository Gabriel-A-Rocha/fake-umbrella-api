import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  private readonly customers: Customer[];

  constructor() {
    this.customers = [];
  }

  create(createCustomerDto: CreateCustomerDto) {
    const customer = new Customer(createCustomerDto);
    this.customers.push(customer);
    return customer;
  }

  findAll() {
    return this.customers;
  }

  findOne(id: string) {
    const customer = this.customers.find((c) => c.id === id);
    return customer;
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
