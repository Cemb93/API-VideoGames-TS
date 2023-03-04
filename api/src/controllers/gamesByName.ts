import { Genres, Platforms, VideoGames } from "../interface";
import { videoGamesDb } from "./VideoGamesDb";
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;

export const gamesByName = async (name: string) => {
  let gameByName: any[] = [];
  // let gameByName: VideoGames[] = [];
  try {
    let gameDb = await videoGamesDb();
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
    if (gameDb && gameDb.length >= 1) {
      gameByName = gameDb.concat(gameByName)
      return gameByName;
    } else {
      return gameByName;
    }
  } catch (error) {
    console.log('No se obtuvo los nombre por:', error);
  }
}