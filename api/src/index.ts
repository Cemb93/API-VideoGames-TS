require('dotenv').config();
import { server } from "./app";
import { dbConexion } from "./db";
const { PORT } = process.env;

/**
 * mongoose => ODM (ORM) de mongoDb
 * 
*/

dbConexion().then(() => {
  server.listen(PORT, () => {
    console.log(`Listening on PORT:`, 3001);
  });
});


// //* VER DE LA DOCUMENTACION -> https://typeorm.io/
// import "reflect-metadata";
// import dotenv from 'dotenv';
// dotenv.config();
// import app from './app';
// import { AppDataSource } from './db';
// const { PORT } = process.env;

// async function main () {
//   try {
//     await AppDataSource.initialize();
//     console.log('CONNECT DB');
//     app.listen(PORT);
//     console.log(`Listenin at POST:`, 3001);
//   } catch (error) {
//     console.log(`Error en el INDEX principal por:`, error);
//   }
// }

// main();