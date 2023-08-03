import dotenv from 'dotenv';
import { connect } from 'mongoose';
dotenv.config();
const { DB } = process.env;

// (async () => {
//   try {
//     if (typeof DB === "string") {
//       await connect(DB)
//       console.log("Base de datos conectada")
//     }
//   } catch (error) {
//     console.log("Error de conexion por:", error)
//   }
// })



export const dbConexion = async (): Promise<void> => {
  if (typeof DB === "string") {
    await connect(DB)
        .then(() => { console.log("<<db-connect>>") })
        .catch((error) => { console.log("No database connection", error) })
  }
}

//* VER DE LA DOCUMENTACION -> https://typeorm.io/
// import "reflect-metadata";
// import dotenv from 'dotenv';
// dotenv.config();
// import { DataSource } from 'typeorm';
// import { Videogames } from "./models/VideoGames";
// import { Genres } from "./models/Genres";
// const { HOST, USER, PASSWORD, DATABASE } = process.env;

// export const AppDataSource = new DataSource({
//   type: "postgres", 
//   host: HOST,
//   username: USER,
//   password: PASSWORD,
//   port: 5432,
//   database: DATABASE,
//   entities: [Videogames, Genres],
//   synchronize: true,
//   // logging: true,
// });