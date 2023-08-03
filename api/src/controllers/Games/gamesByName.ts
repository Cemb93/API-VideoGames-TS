import { GamesApi, GamesGenres, GenerosApi, PlatformsApi } from "../../../../interface/Games";
import { videoGamesDb } from "./VideoGamesDb";
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;

export const gamesByName = async (name: string) => {
  const EndPoint = `${VIDEOGAMES}?search=${name}&key=${KEY}`;
  try {
    const gameDb = await videoGamesDb();

    let allNames: GamesGenres[] = [];
    const nameApi: Response = await fetch(EndPoint);
    const { results } = await nameApi.json();

    results.map((el: GamesApi) => {
      let arrPlatforms: string[] = [];
      if (el.platforms !== null) {
        arrPlatforms = el.platforms.map((el: PlatformsApi) => el.platform.name);
      }
      allNames.push({
        _id: el._id,
        name: el.name,
        released: el.released,
        image: el.background_image,
        rating: el.rating,
        platforms: arrPlatforms,
        genres: el.genres?.map((el: GenerosApi) => el.name)
      });
    });
    
    //* SOLUTION -> https://stackoverflow.com/questions/50234481/typescript-2-8-3-type-must-have-a-symbol-iterator-method-that-returns-an-iterato
    allNames = [...(gameDb as []), ...allNames]
    return allNames;
  } catch (error) {
    console.log('No se obtuvo los nombre por:', error);
  }
}