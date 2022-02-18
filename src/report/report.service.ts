import { Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { WeatherForecastService } from 'src/weather-forecast/weather-forecast.service';

@Injectable()
export class ReportService {
  constructor(
    private customersService: CustomersService,
    private weatherForecastService: WeatherForecastService,
  ) {}

  async generateInfo() {
    const potentialCustomers = this.customersService.findTopEmployeeCompanies();

    const reportInfo = [];

    for (let i = 0; i < potentialCustomers.length; i++) {
      const rainStatus = await this.weatherForecastService.rainNextFiveDays(
        potentialCustomers[i].location,
      );

      reportInfo.push({
        ...potentialCustomers[i],
        rainStatus,
      });
    }

    return reportInfo;
  }
}
