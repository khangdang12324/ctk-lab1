export interface CountryName {
  common: string;
  official: string;
}

export interface CountryFlags {
  png: string;
  svg: string;
  alt?: string;
}

export interface CountryCurrency {
  name: string;
  symbol?: string;
}

export interface Country {
  name: CountryName;
  cca3: string;
  flags: CountryFlags;
  region: string;
  subregion?: string;
  population: number;
  area?: number;
  capital?: string[];
  languages?: Record<string, string>;
  currencies?: Record<string, CountryCurrency>;
  timezones?: string[];
}
