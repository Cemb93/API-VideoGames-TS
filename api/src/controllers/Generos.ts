import { Request, Response } from "express";
import { Generos } from "../interface";
import { Genres } from "../models/Genres";
const fetch = require("node-fetch");
const { GENRES, KEY } = process.env;
//* METODOS DE TYPEORM => https://typeorm.biunav.com/en/repository-api.html#repository-api

export const genresApi = async (_req: Request, res: Response) => {
  try {
    const genreDb = await Genres.find();

    if (!genreDb.length) {
      const dataApi = await fetch(`${GENRES}?key=${KEY}`).then((res: any) => res.json());
      let genresApi = dataApi.results.map((el: Generos) => {
        return {
          id: el.id,
          name: el.name,
        };
      });
      genresApi = await Genres.save(genresApi);
      return res.json(genresApi);
    } else {
      return res.json(genreDb);
    }
  } catch (error) {
    console.log(error);
  }
}