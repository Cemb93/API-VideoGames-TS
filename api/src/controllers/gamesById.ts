import { GenerosApi, PlatformsApi } from "../../../interface";
import { gamesDbById } from "./VideoGamesDb";
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;

export const gamesById = async (id: string | number) => {
  try {
    if (typeof id === 'string' && id.includes('-')) {
      let idDb = await gamesDbById(id);
      return idDb;
    } else {
      const EndPoint = `${VIDEOGAMES}/${id}?key=${KEY}`;
      let idApi = fetch(EndPoint).then((res: any) => res.json());
      //* DSTRUCTURANDO EL OBJETO
      const { name, background_image, released, rating, platforms, genres, description_raw } = await idApi;

      let arrPlataforms: string[] = [];
      let arrGenres: string[] = [];
      if ((platforms && genres) !== undefined) {
        arrPlataforms = platforms.map((el: PlatformsApi) => el.platform.name)
        arrGenres = genres.map((el: GenerosApi) => el.name)
      }
      const game = {
        id,
        name,
        image: background_image,
        released,
        rating,
        platforms: arrPlataforms,
        genres: arrGenres,
        description: description_raw,
      };
      return game;
    }
  } catch (error) {
    console.log('Error en gamesById por:', error);
  }
}

//* ORM => TYPEORM
// export const gamesById = async (id: string | number) => {
//   try {
//     if (typeof id === 'string' && id.includes('-')) {
//       let idDb = await Videogames.findOneBy({ id });
//       return idDb;
//     } else {
//       let idApi = fetch(`${VIDEOGAMES}/${id}?key=${KEY}`).then((res: any) => res.json());
//       //* DSTRUCTURANDO EL OBJETO
//       const { name, background_image, released, rating, platforms, genres, description_raw } = await idApi;
  
//       const game = {
//         id,
//         name,
//         image: background_image,
//         released,
//         rating,
//         platforms: platforms.map((el: PlatformsApi) => el.platform.name),
//         genres: genres.map((el: GenerosApi) => el.name),
//         description: description_raw,
//       };
//       return game;
//     }
//   } catch (error) {
//     console.log('Error en gamesById por:', error);
//   }
// }