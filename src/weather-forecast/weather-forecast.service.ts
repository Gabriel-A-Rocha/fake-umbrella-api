import { BadRequestException, Injectable } from '@nestjs/common';
import { ForecastDto, LocationDto } from './dto/location.dto';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class WeatherForecastService {
  apiKey: string;

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('API_KEY_OPENWEATHER');
  }

  async getGeoCoordinates(location: LocationDto) {
    const { city, state, country } = location;
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&appid=${this.apiKey}`;
    const response = await axios.get(url);
    const { lat, lon } = response.data[0];
    return { lat, lon };
  }

  async getFiveDaysForecast(lat: number, lon: number) {
    const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=standard&appid=${this.apiKey}`;
    const { data } = await axios.get(url);
    const forecast = data.list;
    return forecast;
  }

  checkRainyForecast(forecast: ForecastDto[]) {
    for (let i = 0; i < forecast.length; i++) {
      /*
      [
        { id: 600, main: 'Snow', description: 'light snow', icon: '13d' },
        { id: 511, main: 'Rain', description: 'freezing rain', icon: '13d' }
      ]
      */
      const dailyForecast = forecast[i].weather;
      if (dailyForecast.some((w) => w.main === 'Rain')) {
        return true;
      }
    }
    return false;
  }
}
