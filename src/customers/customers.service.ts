import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];

  constructor() {
    this.loadExampleCustomers();
  }

  loadExampleCustomers() {
    exampleCustomers.forEach((c) => this.customers.push(new Customer(c)));
  }

  create(createCustomerDto: CreateCustomerDto) {
    const customer = new Customer(createCustomerDto);
    this.customers.push(customer);
    return customer;
  }

  findAll() {
    return this.customers;
  }

  findTopEmployeeCompanies() {
    // sort by employee count (descending order)
    this.customers.sort(function (a, b) {
      return b.employeeCount - a.employeeCount;
    });

    const list = [];
    for (let index = 0; index <= 3; index++) {
      if (!this.customers[index]) {
        break;
      }
      list.push(this.customers[index]);
    }
    return list;
  }

  findOne(id: string) {
    const customer = this.customers.find((c) => c.id === id);
    return customer;
  }

  update(id: string, updateCustomerDto: UpdateCustomerDto) {
    const customer = this.findOne(id);
    if (!customer) throw new NotFoundException();

    const entries = Object.entries(updateCustomerDto);
    entries.forEach((pair) => {
      const [key, value] = pair;
      customer[key] = value;
    });

    return customer;
  }

  remove(id: string) {
    const recordsBefore = this.customers.length;
    this.customers = this.customers.filter((c) => c.id !== id);
    const recordsAfter = this.customers.length;

    if (recordsAfter === recordsBefore) {
      throw new NotFoundException();
    }
    return { message: 'Customer removed from database' };
  }
}

const exampleCustomers = [
  {
    name: 'Clover Inc.',
    contact: 'Jennifer Smith',
    phone: '15674234',
    employeeCount: 25,
    location: {
      country: 'CA',
      city: 'Kitchener',
      state: 'ON',
    },
  },
  {
    name: 'Iron Workshop',
    contact: 'Richard Clark',
    phone: '10942987',
    employeeCount: 72,
    location: {
      country: 'US',
      city: 'Los Angeles',
      state: 'CA',
    },
  },
  {
    name: "Clark's Steak House",
    contact: 'Bret Stalk',
    phone: '94298711',
    employeeCount: 94,
    location: {
      country: 'MA',
      city: 'Marrakesh',
      state: 'Marrakesh-Safi',
    },
  },
  {
    name: 'Billboard Valley',
    contact: 'Gordon Doon',
    phone: '22266646',
    employeeCount: 46,
    location: {
      country: 'CL',
      city: 'Arica',
      state: 'Arica and Parinacota Region',
    },
  },
];
