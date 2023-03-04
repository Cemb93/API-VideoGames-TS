import dotenv from 'dotenv';
import app from './app';
import { sequelize } from './db';
// import { sequelize } from './db';
dotenv.config();

const { PORT } = process.env;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Listening at port:`, 3001);
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