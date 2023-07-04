export type Season = 'Verano' | 'Otoño' | 'Invierno' | 'Primavera';

export type NameCoutry = {
  common: string,
}

export type Activities = {
  id?: number,
  name: string,
  difficulty: number,
  duration: string,
  season: Season
}