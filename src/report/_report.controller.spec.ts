import { Test, TestingModule } from '@nestjs/testing';
import { CustomersModule } from 'src/customers/customers.module';
import { CustomersService } from 'src/customers/customers.service';
import { WeatherForecastModule } from 'src/weather-forecast/weather-forecast.module';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

describe.skip('ReportController', () => {
  let controller: ReportController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [CustomersModule, WeatherForecastModule],
      controllers: [ReportController],
      providers: [ReportService],
    }).compile();

    controller = module.get<ReportController>(ReportController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
