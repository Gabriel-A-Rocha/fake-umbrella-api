import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WeatherForecastService } from './weather-forecast.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [WeatherForecastService],
  exports: [WeatherForecastService],
})
export class WeatherForecastModule {}
