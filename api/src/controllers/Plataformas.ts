import { Request, Response } from "express";
const fetch = require("node-fetch");
const { PLATFORMS, KEY } = process.env;

interface Platforms {
  id: number
  name: string
}
//! SOLO SE USA PARA CONOCER LA CANTIDAD TOTAL DE PLATAFORMAS
export const platformsApi = async (_req: Request, res: Response) => {
  try {
    let platformsApi: Platforms[] = [];
    for (let i = 0; i <= 1; i++) {
      const EndPoint = `${PLATFORMS}?key=${KEY}&page=${i}`;

      platformsApi.push(await fetch(EndPoint)
        .then((data: any) => data.json())
        .catch((error: string) => console.log('Error en la API por:', error))
      );
    }
    let allPlatforms = await Promise.all(platformsApi)
      .then((res: any) => res[1].results.map((el: Platforms) => {
        return {
          id: el.id,
          name: el.name,
        }
      }));
    // console.log('PLATFORMS:', allPlatforms.length);//*50
    return res.json(allPlatforms);
  } catch (error) {
    console.log(error);
  }
}