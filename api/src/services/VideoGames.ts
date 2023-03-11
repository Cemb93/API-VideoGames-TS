import { Request, Response } from "express"
import { gamesByName } from "../controllers/gamesByName";
import { gamesById } from "../controllers/gamesById";
import { videoGamesApi } from "../controllers/VideoGames";
import { GamesGenres } from "../../../interface";

export const allVideoGames = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    let allGames = await videoGamesApi();
    if (typeof name === 'string') {
      let names = await gamesByName(name);
      if (names && names.length >= 1) {
        let filterName = names.filter((el: GamesGenres) => {
          return el.name.toLowerCase().includes(name.toLowerCase());
        });
        
        let firstNames: GamesGenres[] = [];
        for (let i = 0; i < filterName.length; i++) {
          firstNames.push(filterName[i]);
          if (firstNames.length <= 15) {
            firstNames = firstNames;
            if (firstNames.length) {
              return res.json(firstNames);
            } else {
              return res.json({ msg: `No hay juegos con el nombre: ${name}` });
            }
          }
        }
      }
      //! Si no encuentra nada que filtrar devuelve este mesaje
      return res.json({ mgs: `No existen juegos con el nombre: ${name}` })
    }
    return res.status(200).json(allGames);
  } catch (error) {
    console.log('Error en la ruta principal por:',error)
  }
}

export const allVideoGamesById = async (req: Request, res: Response) => {
  let { id } = req.params;
  try {
    let allIds = await gamesById(id);
    if (!allIds || allIds['name'] === undefined) {
      return res.json({ mgs: `El Juego con el ID: ${id}, no existe!` });
    }
    return res.json(allIds);
  } catch (error) {
    console.log('Error para tener todos los juegos por ID por:', error);
  }
}