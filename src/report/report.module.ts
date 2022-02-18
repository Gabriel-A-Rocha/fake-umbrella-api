import { Module } from '@nestjs/common';
import { CustomersModule } from 'src/customers/customers.module';
import { CustomersService } from 'src/customers/customers.service';
import { WeatherForecastModule } from 'src/weather-forecast/weather-forecast.module';
import { WeatherForecastService } from 'src/weather-forecast/weather-forecast.service';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [CustomersModule, WeatherForecastModule],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
