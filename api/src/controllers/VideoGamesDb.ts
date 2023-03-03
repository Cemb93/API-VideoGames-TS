import { AppDataSource } from "../db";
import { Genres } from "../models/Genres";
import { Videogames } from "../models/VideoGames";

export const videoGamesDb = async () => {
  try {
    const videoGamesDb = AppDataSource.getRepository(Videogames)
    const genresDb = AppDataSource.getRepository(Genres)
    // let games_DB = await videoGamesDb.findAll({

    let games_DB = await Videogames.find({
      relations: ['genre']
    });
    //* Se cambia el formato para una mejor visualizacion
    games_DB = JSON.parse(JSON.stringify(games_DB));
    return games_DB;
  } catch (error) {
    console.log('Error en videoGamesDb por:', error)
  }
}