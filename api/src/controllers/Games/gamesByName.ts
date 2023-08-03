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
    const {results} = await nameApi.json();

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
    
    // allNames = [...gameDb, ...allNames]
    // allNames = [...allNames, gameDb]
    // return allNames;
    return gameDb;
  } catch (error) {
    console.log('No se obtuvo los nombre por:', error);
  }
}

// export const gamesByName = async (name: string) => {
//   let gameByName: any[] = [];
//   // let gameByName: VideoGames[] = [];
//   try {
//     let gameDb = await videoGamesDb();
//     let nameApi = await fetch(`${VIDEOGAMES}?search=${name}&key=${KEY}`).then((data: any) => data.json());
//     nameApi.results.map((el: VideoGames) => {
//       gameByName.push({
//         id: el.id,
//         name: el.name,
//         released: el.released,
//         image: el.background_image,
//         rating: el.rating,
//         platforms: el.platforms !== null ? el.platforms.map((el: PlatformsApi) => el.platform.name) : 'SIN PLATAFORMAS',
//         genres: el.genres.map((el: GenerosApi) => el.name),
//       });
//     });
//     if (gameDb && gameDb.length >= 1) {
//       gameByName = gameDb.concat(gameByName)
//       return gameByName;
//     } else {
//       return gameByName;
//     }
//   } catch (error) {
//     console.log('No se obtuvo los nombre por:', error);
//   }
// }