import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { WeatherForecastModule } from './weather-forecast/weather-forecast.module';

@Module({
  imports: [CustomersModule, WeatherForecastModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
