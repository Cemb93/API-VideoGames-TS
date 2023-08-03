import { genreModel } from "../../models/genre";
import { VideoGameModel } from "../../models/videogame";

export const videoGamesDb = async () => {
  try {
    let games_DB = await VideoGameModel.find({
      include: {
        model: genreModel,
        attributes: ["name"],
        through: { attributes: [], },
      },
    });
    console.log("GAMES DB:", games_DB)
    games_DB = JSON.parse(JSON.stringify(games_DB));
    return games_DB;
  } catch (error) {
    console.log('Error en videoGamesDb por:', error)
  }
}

export const gamesDbById = async (id: string) => {
  try {
    let id_DB = await VideoGameModel.findById(id, {
      include: {
        model: genreModel,
        attributes: ["name"],
        through: { attributes: [], },
      },
    });
    id_DB = JSON.parse(JSON.stringify(id_DB));
    return id_DB;
  } catch (error) {
    console.log('Error en gamesDbById por:', error)
  }
}