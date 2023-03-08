import db from "../models/db";

export const videoGamesDb = async () => {
  try {
    let games_DB = await db.VideoGame.findAll({
      include: {
        model: db.genre,
        attributes: ["name"],
        through: { attributes: [], },
      },
    });
    games_DB = JSON.parse(JSON.stringify(games_DB));
    return games_DB;
  } catch (error) {
    console.log('Error en videoGamesDb por:', error)
  }
}

export const gamesDbById = async (id: string) => {
  let id_DB = await db.VideoGame.findByPk(id, {
    include: {
      model: db.genres,
      attributes: ["name"],
      through: { attributes: [], },
    },
  });
  return id_DB;
}