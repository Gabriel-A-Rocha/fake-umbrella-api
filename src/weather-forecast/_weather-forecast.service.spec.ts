import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { WeatherForecastService } from './weather-forecast.service';

describe('WeatherForecastService', () => {
  let service: WeatherForecastService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [WeatherForecastService],
    }).compile();

    service = module.get<WeatherForecastService>(WeatherForecastService);
  });

  it('should retrieve Kitchener,ON,CA geo coordinates', async () => {
    const location = {
      city: 'kitchener',
      state: 'on',
      country: 'ca',
    };

    const { lat, lon } = await service.getGeoCoordinates(location);

    const data = {
      name: 'Kitchener',
      lat: 43.451291,
      lon: -80.4927815,
      country: 'CA',
      state: 'Ontario',
    };

    expect(lat).toEqual(data.lat);
    expect(lon).toEqual(data.lon);
  });

  it('should retrieve Los Angeles,CA,US geo coordinates', async () => {
    const location = {
      city: 'los angeles',
      state: 'ca',
      country: 'us',
    };

    const { lat, lon } = await service.getGeoCoordinates(location);

    const geoData = {
      name: 'Los Angeles',
      lat: 34.0536909,
      lon: -118.242766,
      country: 'US',
      state: 'California',
    };

    expect(lat).toEqual(geoData.lat);
    expect(lon).toEqual(geoData.lon);
  });

  it('should get 5 days forecast (3 hour gap) from geo coordinates', async () => {
    const lat = 43.451291;
    const lon = -80.4927815;

    const forecast = await service.getFiveDaysForecast(lat, lon);

    expect(forecast.length).toBe(40);
  });

  it('should idenfify rain in the forecast list provided', () => {
    const forecast = [
      {
        weather: [
          {
            id: 601,
            main: 'Snow',
            description: 'snow',
            icon: '13n',
          },
        ],
      },
      {
        weather: [
          {
            id: 600,
            main: 'Snow',
            description: 'light snow',
            icon: '13d',
          },
          {
            id: 511,
            main: 'Rain',
            description: 'freezing rain',
            icon: '13d',
          },
        ],
      },
    ];

    const response = service.checkRainyForecast(forecast);

    expect(response).toBe(true);
  });
});
