import { GamesApi, GenerosApi, PlatformsApi } from "../../../interface/IGames";
import { gamesDbById } from "./VideoGamesDb";
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;

export const gamesById = async (_id: string | number) => {
  try {
    if (typeof _id === 'string' && _id.length === 24) {
      const idDb = await gamesDbById(_id);
      return idDb;
    } else {
      const EndPoint = `${VIDEOGAMES}/${_id}?key=${KEY}`;
      const idApi: Response = await fetch(EndPoint);
      const res: GamesApi = await idApi.json();

      let arrPlataforms: string[] = [];
      let arrGenres: string[] = [];
      if ((res.platforms && res.genres) !== undefined) {
        arrPlataforms = res.platforms.map((el: PlatformsApi) => el.platform.name)
        arrGenres = res.genres.map((el: GenerosApi) => el.name)
      }
      const game = {
        _id: res.id,
        name: res.name,
        image: res.background_image,
        released: res.released,
        rating: res.rating,
        platforms: arrPlataforms,
        genres: arrGenres,
        description: res.description_raw,
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