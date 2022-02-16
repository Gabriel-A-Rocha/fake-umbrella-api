export class CreateCustomerDto {
  name: string;
  contact: string;
  phone: string;
  location: {
    country: string;
    state: string;
    city: string;
  };
  employeeCount: number;
}
