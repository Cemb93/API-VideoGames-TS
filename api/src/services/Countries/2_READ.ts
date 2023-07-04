import { Request, Response } from 'express';
import { getAllCountries } from '../../controllers/Countries/getCountries';
import { CountriesActivites } from '../../../../interface/Countries';
import db from '../../models/db';

export const Countries = async (req: Request, res: Response) => {
  const { name } = req.query;
  try {
    const dataApi = await getAllCountries();
    if (typeof name === 'string') {
      let filterByName = dataApi.filter((el: CountriesActivites) => {
        return el.name.toLowerCase().includes(name.toLowerCase());
      });
      
      if (!filterByName.length) {
        return res.json({ error: `El paíz ${name.toUpperCase()}, no existe` });
      } else {
        return res.json(filterByName);
      }
    } else {
      return res.json(dataApi);
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.json({ error: error.message });
    } else {
      console.log(error)
    }
  }
}

export const countriesById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const infoDb = await db.countrie.findAll({
      where: {
        cca3: id.toUpperCase(),
      },
      include: {
        model: db.activitie,
        attributes: ["id", "name", "difficulty", "season", "duration"],
        through: {
          attributes: [],
        },
      },
    });

    let findById = infoDb.find((el: CountriesActivites) => el.cca3 === id.toUpperCase());

    if (!findById) return res.json({ error: `El País con el ID: > (${id}) < NO existe!` });

    return res.json(findById);
  } catch (error) {
    return res.send(`Error en el Detalle por: ${error}`);
  }
}