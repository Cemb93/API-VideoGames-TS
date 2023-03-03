import dotenv from 'dotenv';
import { videoGamesDb } from './VideoGamesDb';
dotenv.config();
const { VIDEOGAMES, API_KEY } = process.env;

export const videoGamesApi = async () => {
  try {
    let gameDb = await videoGamesDb()
    if (typeof VIDEOGAMES === 'string' && typeof API_KEY === 'string') {
      const dataApi = await fetch(`${VIDEOGAMES}?key=${API_KEY}`).then((data: any) => data.json())
    }
  } catch (error) {
    console.log('Error en videoGamesApi por:', error);
  }
}
