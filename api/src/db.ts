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
  type: "postgres",//* Elegimos la DB 
  host: HOST,
  username: USER,
  password: PASSWORD,
  port: 5432,//! PUERTO POR DEFECTO
  database: DATABASE,//* NOMBRE DE LA BASE DE DATOS
  entities: [Videogames, Genres],//* NOMBRE DE LOS MODELOS
  synchronize: true,
  // logging: true,//* No permite visualizar la info de DB en la terminal
})