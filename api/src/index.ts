require('dotenv').config();
// import db from './models/db';
import server from './app';
const { PORT } = process.env;
import { dbConexion } from "./db_demo";

/**
 * mongoose => ODM (ORM) de mongoDb
 * 
*/

server.listen(PORT, () => {
  console.log(`Listening at PORT:`, 3001);
  dbConexion()
});


// db.sequelize.sync({ force: false }).then(() => {
//   server.listen(PORT, () => {
//     console.log(`Listening at PORT:`, 3001);
//   });
// });


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