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
}
