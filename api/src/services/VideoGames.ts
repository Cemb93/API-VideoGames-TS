import { Request, Response } from "express"
import { videoGamesApi } from "../controllers/VideoGames";
import { videoGamesDb } from "../controllers/VideoGamesDb";
const fetch = require("node-fetch");
import { Genres, Platforms, VideoGames } from "../interface/VideoGames";
const { VIDEOGAMES, KEY } = process.env;

export const allVideoGames = async (req: Request, res: Response) => {
  const { name } = req.query;
  let gameByName: any[] = [];
  // let gameByName: VideoGames[] = [];
  try {
    let gameDb = await videoGamesDb();
    let allGames = await videoGamesApi();

    let nameApi = await fetch(`${VIDEOGAMES}?search=${name}&key=${KEY}`).then((data: any) => data.json());
    nameApi.results.map((el: VideoGames) => {
      gameByName.push({
        id: el.id,
        name: el.name,
        released: el.released,
        image: el.background_image,
        rating: el.rating,
        platforms: el.platforms !== null ? el.platforms.map((el: Platforms) => el.platform.name) : 'SIN PLATAFORMAS',
        genres: el.genres.map((el: Genres) => el.name),
      });
    });
    // gameByName = gameDb?.concat(gameByName)
    gameByName = gameByName.concat(gameDb)

    if (typeof name === 'string') {
      let filterName = gameByName.filter((el: VideoGames) => {
        return el.name.toLowerCase().includes(name.toLowerCase());
      });
      
      let firstNames = [];
      for (let i = 0; i < filterName.length; i++) {
        firstNames.push(filterName[i]);
        if (firstNames.length === 15) {
          firstNames = firstNames;
          firstNames.length ? res.json(firstNames) : res.send("No existe el Video Juego que buscas.");
        }
      }
    }
    return res.status(200).json(allGames);
  } catch (error) {
    console.log(error)
  }
}