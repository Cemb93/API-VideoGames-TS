import { Request, Response } from "express";
import { EndPointP } from "../../../interface";
const fetch = require("node-fetch");
const { PLATFORMS, KEY } = process.env;

//! SOLO SE USA PARA CONOCER LA CANTIDAD TOTAL DE PLATAFORMAS
export const platformsApi = async (_req: Request, res: Response) => {
  try {
    let platformsApi: EndPointP[] = [];
    for (let i = 0; i <= 1; i++) {
      const EndPoint = `${PLATFORMS}?key=${KEY}&page=${i}`;

      platformsApi.push(await fetch(EndPoint)
        .then((data: Response) => data.json())
        .catch((error: string) => console.log('Error en la API por:', error))
      );
    }
    let allPlatforms = await Promise.all(platformsApi)
      .then((res: any) => res[1].results.map((el: EndPointP) => {
        return {
          id: el.id,
          name: el.name,
        }
      }).sort((x: EndPointP, y: EndPointP) => {
        //* Se ordena el objeto Alfabeticamente
        return x.name.localeCompare(y.name);
      }));
    return res.json(allPlatforms);
  } catch (error) {
    console.log(error);
  }
}