import { VideoGameModel } from "../models/videogame";

export const videoGamesDb = async () => {
  try {
    let games_DB = await VideoGameModel.find();
    return games_DB;
  } catch (error) {
    console.log('Error en videoGamesDb por:', error)
  }
}

export const gamesDbById = async (_id: string) => {
  try {
    let id_DB = await VideoGameModel.findById(_id);
    // id_DB = JSON.parse(JSON.stringify(id_DB));
    return id_DB;
  } catch (error) {
    console.log('Error en gamesDbById por:', error)
  }
}