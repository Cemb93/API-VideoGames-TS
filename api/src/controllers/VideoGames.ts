import dotenv from "dotenv";
import { VideoGames } from "../interface/VideoGames";
//* FETCH WITH NODE.JS => https://stackoverflow.com/questions/48433783/referenceerror-fetch-is-not-defined
const fetch = require("node-fetch");
import { videoGamesDb } from "./VideoGamesDb";
dotenv.config();
const { VIDEOGAMES, API_KEY } = process.env;

export const videoGamesApi = async () => {
  try {
    let gameDb = await videoGamesDb();
    console.log('DB:', gameDb)
    let pagesOfApi = [];
    if (typeof VIDEOGAMES === "string" && typeof API_KEY === "string") {
      for (let i = 0; i <= 1; i++) {
        pagesOfApi.push(
          await fetch(`${VIDEOGAMES}?key=${API_KEY}&page=${i}`).then(
            (data: any) => data.json()
          ).catch((error: string) => console.log('Error en la API por:', error))
        );
      }
      // console.log('GAMES:', pagesOfApi)
      let gamesOfApi = await Promise.all(pagesOfApi).then((res: any) => res[1].results.map((el:any) => el))
      return gamesOfApi;
      // return pagesOfApi;
    }
  } catch (error) {
    console.log("Error en videoGamesApi por:", error);
  }
};
