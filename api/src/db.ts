//* VER DE LA DOCUMENTACION -> https://typeorm.io/
import "reflect-metadata";
import dotenv from 'dotenv';
dotenv.config();
import { DataSource } from 'typeorm';
import { Videogames } from "./models/VideoGames";
import { Genres } from "./models/Genres";
const { HOST, USER, PASSWORD, DATABASE } = process.env;

//* Genero la coneccion de la base de datos
export const AppDataSource = new DataSource({
  type: "postgres", 
  host: HOST,
  username: USER,
  password: PASSWORD,
  port: 5432,
  database: DATABASE,
  entities: [Videogames, Genres],
  synchronize: true,
  // logging: true,
});