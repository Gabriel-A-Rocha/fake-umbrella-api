import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { WeatherForecastModule } from './weather-forecast/weather-forecast.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [CustomersModule, WeatherForecastModule, ReportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
