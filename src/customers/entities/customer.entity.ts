import { v4 as uuidv4 } from 'uuid';
import { CreateCustomerDto } from '../dto/create-customer.dto';

export class Customer {
  id: string;
  name: string;
  contact: string;
  phone: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  employeeCount: number;

  constructor(createCustomerDto: CreateCustomerDto) {
    this.id = uuidv4();
    const { name, contact, phone, location, employeeCount } = createCustomerDto;
    this.name = name;
    this.contact = contact;
    this.phone = phone;
    this.location = location;
    this.employeeCount = employeeCount;
  }
}
