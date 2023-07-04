import { Activities, NameCoutry } from "../../types/Countries";

//!NOTA: El nombre de las propiedades SI tienen que ser del mismo nombre de la API
export interface CountriesApi {
  cca3: string,
  name: NameCoutry,
  flags: string[],
  continents: string[],
  capital?: string[],
  subregion?: string,
  area?: number,
  population: number,
}

type PropsCountriesApi = Omit<CountriesApi, 'name' | 'flags' | 'continents'>

export interface CountriesActivites extends PropsCountriesApi {
  name: string,
  flags: string,
  continents: string,
  activities: Activities[],
}

export interface ActivitiesCountries extends Activities {
  countries?: CountriesApi[];
}