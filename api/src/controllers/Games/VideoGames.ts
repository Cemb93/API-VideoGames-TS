import dotenv from "dotenv";
import { GamesApi, GamesGenres, GenerosApi, PlatformsApi } from "../../../../interface/Games";
//* FETCH WITH NODE.JS => https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");
import { videoGamesDb } from "./VideoGamesDb";
dotenv.config();
const { VIDEOGAMES, KEY } = process.env;

export const videoGamesApi = async () => {
  try {
    const gameDb = await videoGamesDb();
    let pagesOfApi: GamesGenres[] = [];
    for (let i = 1; i <= 5; i++) {
      const EndPoint = `${VIDEOGAMES}?key=${KEY}&page=${i}`;
      const dataApi: Response = await fetch(EndPoint);
      const response: GamesGenres = await dataApi.json();
      pagesOfApi.push(response)
    }
    const gamesOfApi = await Promise.all(pagesOfApi)
      .then((res: any) => {
        let pages: GamesApi[] = [];
        for (let i = 0; i < res.length; i++) {
          pages = pages.concat(res[i].results);
        }
        return pages.map((el: GamesApi) => {
          return {
            _id: el.id,
            name: el.name,
            released: el.released,
            image: el.background_image,
            rating: el.rating,
            platforms: el.platforms.map((el: PlatformsApi) => el.platform.name),
            genres: el.genres?.map((el: GenerosApi) => el.name),
          }
        });
      });
    //* SOLUTION -> https://stackoverflow.com/questions/50234481/typescript-2-8-3-type-must-have-a-symbol-iterator-method-that-returns-an-iterato
    pagesOfApi = [...<[]>gameDb, ...<[]>gamesOfApi]
    // pagesOfApi = [...<[]>gameDb, ...(gamesOfApi as [])]
    return pagesOfApi;
  } catch (error) {
    console.log("Error en videoGamesApi por:", error);
  }
};

// export const videoGamesApi = async () => {
//   try {
//     let gameDb = await videoGamesDb();
//     // console.log('DB:', gameDb)
//     let pagesOfApi = [];
//     if (typeof VIDEOGAMES === "string" && typeof KEY === "string") {
//       for (let i = 0; i <= 1; i++) {
//         pagesOfApi.push(
//           await fetch(`${VIDEOGAMES}?key=${KEY}&page=${i}`).then(
//             (data: any) => data.json()
//           ).catch((error: string) => console.log('Error en la API por:', error))
//         );
//       }
//       let gamesOfApi = await Promise.all(pagesOfApi).then((res: any) => res[1].results.map((el: GamesApi) => {
//         return {
//           id: el.id,
//           name: el.name,
//           released: el.released,
//           image: el.background_image,
//           rating: el.rating,
//           platforms: el.platforms.map((el: PlatformsApi) => el.platform.name),
//           genres: el.genres.map((el: GenerosApi) => el.name),
//         }
//       }));
//       gamesOfApi = gameDb?.concat(gamesOfApi)
//       return gamesOfApi;
//     }
//   } catch (error) {
//     console.log("Error en videoGamesApi por:", error);
//   }
// };
