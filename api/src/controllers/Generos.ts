import { Request, Response } from "express";
import { GenerosApi } from "../../../interface/IGames";
import { genreModel } from "../models/genre";
const fetch = require("node-fetch");
const { GENRES, KEY } = process.env;

export const genresApi = async (_req: Request, res: Response) => {
  try {
    const genreDb = await genreModel.find();
    const EndPoint = `${GENRES}?key=${KEY}`;

    if (!genreDb.length) {
      const dataApi = await fetch(EndPoint);
      const {results} = await dataApi.json();
      
      let genresApi = results.map((el: GenerosApi) => {
        return {
          // id: el.id,
          name: el.name,
        };
      });

      genresApi = await genreModel.create(genresApi);
      return res.json(genresApi);
    } else {
      return res.json(genreDb);
    }
  } catch (error) {
    console.log(error);
  }
}

// export const genresApi = async (_req: Request, res: Response) => {
//   try {
//     const genreDb = await Genres.find();

//     if (!genreDb.length) {
//       const dataApi = await fetch(`${GENRES}?key=${KEY}`).then((res: any) => res.json());
//       let genresApi = dataApi.results.map((el: GenerosApi) => {
//         return {
//           id: el.id,
//           name: el.name,
//         };
//       });
//       genresApi = await Genres.save(genresApi);
//       return res.json(genresApi);
//     } else {
//       return res.json(genreDb);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }