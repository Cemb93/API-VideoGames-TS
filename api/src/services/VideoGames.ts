import { Request, Response } from "express"
import { videoGamesApi } from "../controllers/VideoGames";

export const allVideoGames = async (req: Request, res: Response) => {
  let { name } = req.query;
  try {
    let videoGames = await videoGamesApi();
    return res.status(200).json(videoGames);
  } catch (error) {
    console.log(error)
  }
}