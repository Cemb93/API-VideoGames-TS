// import { AppDataSource } from "../db";
import { Genres } from "../models/Genres";
import { Videogames } from "../models/VideoGames";

export const videoGamesDb = async () => {
  try {
    // let games_DB = await Videogames.find({
    //   // relations: ['genre']
    //   relations: ['genres']
    // });

    // games_DB = JSON.parse(JSON.stringify(games_DB));
    // // console.log('GAMES IN DB:', games_DB)
    // return games_DB;
  } catch (error) {
    console.log('Error en videoGamesDb por:', error)
  }
}