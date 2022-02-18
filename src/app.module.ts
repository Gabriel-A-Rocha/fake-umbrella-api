import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';
import { WeatherForecastModule } from './weather-forecast/weather-forecast.module';

@Module({
  imports: [ConfigModule.forRoot(), CustomersModule, WeatherForecastModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
