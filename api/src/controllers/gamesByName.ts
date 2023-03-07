import { GamesApi, GenerosApi, PlatformsApi } from "../interface";
import { videoGamesDb } from "./VideoGamesDb";
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;

export const gamesByName = async (name: string) => {
  const EndPoint = `${VIDEOGAMES}?search=${name}&key=${KEY}`;
  try {
    let gameDb = await videoGamesDb();

    //! Se obtiene la información de la API
    let nameApi = await fetch(EndPoint).then((data: any) => data.json());

    //! Se usa el ARREGLO del metodo MAP() para concatenar
    nameApi.results.map((el: GamesApi) => {
      let arrPlatforms: string[] = [];
      if (el.platforms !== null) {
        arrPlatforms = el.platforms.map((el: PlatformsApi) => el.platform.name);
      }
      return {
        id: el.id,
        name: el.name,
        released: el.released,
        image: el.background_image,
        rating: el.rating,
        platforms: arrPlatforms,
        genres: el.genres?.map((el: GenerosApi) => el.name)
      };
    });
    if (gameDb && gameDb.length >= 1) {
      nameApi = gameDb.concat(nameApi)
      return nameApi;
    } else {
      return nameApi;
    }
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