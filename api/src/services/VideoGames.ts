import { Request, Response } from "express"
import { gamesByName } from "../controllers/gamesByName";
import { gamesById } from "../controllers/gamesById";
import { videoGamesApi } from "../controllers/VideoGames";
import { GamesGenres } from "../../../interface/IGames";

export const allVideoGames = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const allGames = await videoGamesApi();
    if (typeof name === 'string') {
      const names = await gamesByName(name);
      if (names) {
        const filterName = names.filter((el: GamesGenres) => {
          return el.name.toLowerCase().includes(name.toLowerCase());
        });
        
        let firstNames: GamesGenres[] = [];
        for (let i = 0; i < filterName.length; i++) {
          firstNames.push(filterName[i]);
          if (firstNames.length === 15) {
            return res.json(firstNames);
          }
        }
      } else {
        //! Si no encuentra nada que filtrar devuelve este mesaje
        return res.json({ mgs: `No existen juegos con el nombre: ${name}` });
      }
    } else {
      return res.status(200).json(allGames);
    }
  } catch (error) {
    console.log('Error en la ruta principal por:',error)
  }
}

export const allVideoGamesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const allIds = await gamesById(id);
    if (!allIds || allIds['name'] === undefined) {
      return res.json({ mgs: `El Juego con el ID: ${id}, no existe!` });
    }
    return res.json(allIds);
  } catch (error) {
    console.log('Error para tener todos los juegos por ID por:', error);
  }
}