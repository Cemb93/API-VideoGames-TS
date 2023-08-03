import { Request, Response } from "express";
import { EndPointP } from "../../../../interface/Games";
const fetch = require("node-fetch");
const { PLATFORMS, KEY } = process.env;

//! SOLO SE USA PARA CONOCER LA CANTIDAD TOTAL DE PLATAFORMAS
export const platformsApi = async (_req: Request, res: Response) => {
  try {
    let platformsApi: EndPointP[] = [];

    for (let i = 0; i <= 1; i++) {
      const EndPoint = `${PLATFORMS}?key=${KEY}&page=${i}`;
      const dataApi = await fetch(EndPoint);
      const response = await dataApi.json();
      platformsApi.push(response)
    }
    
    const allPlatforms = await Promise.all(platformsApi)
      .then((res: any) => res[1].results.map((el: EndPointP) => {
        return {
          // id: el.id,
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