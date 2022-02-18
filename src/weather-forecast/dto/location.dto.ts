export class LocationDto {
  country: string;
  state: string;
  city: string;
}

export class ForecastDto {
  weather: Array<{
    id: number;
    main: string;
    description: string;
    icon: string;
  }>;
}
