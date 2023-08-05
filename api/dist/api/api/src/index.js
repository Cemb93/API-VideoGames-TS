"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const app_1 = require("./app");
const db_1 = require("./db");
const { PORT } = process.env;
/**
 * mongoose => ODM (ORM) de mongoDb
 *
*/
(0, db_1.dbConexion)().then(() => {
    app_1.server.listen(PORT, () => {
        console.log(`Listening on PORT:`, 3001);
        console.log("MongoDb Conected is OK!!");
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
