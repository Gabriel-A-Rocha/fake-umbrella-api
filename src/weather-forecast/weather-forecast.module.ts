import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherForecastService } from './weather-forecast.service';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [],
  providers: [WeatherForecastService],
})
export class WeatherForecastModule {}
