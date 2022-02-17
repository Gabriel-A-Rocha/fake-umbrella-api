import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { WeatherForecastService } from './weather-forecast/weather-forecast.service';

@Module({
  imports: [CustomersModule],
  controllers: [],
  providers: [WeatherForecastService],
})
export class AppModule {}
