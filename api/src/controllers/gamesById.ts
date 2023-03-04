import { Genres, Platforms } from "../interface/VideoGames";
import { Videogames } from "../models/VideoGames";
const fetch = require("node-fetch");
const { VIDEOGAMES, KEY } = process.env;

export const gamesById = async (id: string | number) => {
  try {
    if (typeof id === 'string' && id.includes('-')) {
      let idDb = await Videogames.findOneBy({ id });
      return idDb;
    } else {
      let idApi = fetch(`${VIDEOGAMES}/${id}?key=${KEY}`).then((res: any) => res.json());
      //* DSTRUCTURANDO EL OBJETO
      const { name, background_image, released, rating, platforms, genres, description_raw } = await idApi;
  
      const game = {
        id,
        name,
        image: background_image,
        released,
        rating,
        platforms: platforms.map((el: Platforms) => el.platform.name),
        genres: genres.map((el: Genres) => el.name),
        description: description_raw,
      };
      return game;
    }
  } catch (error) {
    console.log('Error en gamesById por:', error);
  }
}