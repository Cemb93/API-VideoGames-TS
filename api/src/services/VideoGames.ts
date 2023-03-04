import { Request, Response } from "express"
import { gamesByName } from "../controllers/gamesByName";
import { videoGamesApi } from "../controllers/VideoGames";
import { VideoGames } from "../interface/VideoGames";

export const allVideoGames = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    let allGames = await videoGamesApi();
    if (typeof name === 'string') {
      let names = await gamesByName(name);
      if (names && names.length >= 1) {
        let filterName = names.filter((el: VideoGames) => {
          return el.name.toLowerCase().includes(name.toLowerCase());
        });
        
        let firstNames = [];
        for (let i = 0; i < filterName.length; i++) {
          firstNames.push(filterName[i]);
          if (firstNames.length === 15) {
            firstNames = firstNames;
            if (firstNames.length) {
              return res.json(firstNames);
            } else {
              return res.json({ msg: 'El juego que buscas no existe' });
            }
          }
        }
      }
    }
    return res.status(200).json(allGames);
  } catch (error) {
    console.log('Error en la ruta principal por:',error)
  }
}