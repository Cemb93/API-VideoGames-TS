import dotenv from 'dotenv';
import { connect } from 'mongoose';
dotenv.config();
const { DB } = process.env;

export const dbConexion = async (): Promise<void> => {
  try {
    if (typeof DB === "string") {
      await connect(DB)
    }
  } catch (error) {
    console.log("Error in conection for:", error)
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