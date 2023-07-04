import { Request, Response } from 'express';
import db from '../../models/db';

export const postActivities = async (req: Request, res: Response) => {
  const { name, duration, difficulty, season, country } = req.body;

  try {
    let newActivity = await db.activitie.create({ name, difficulty, duration, season, });

    let countryDb = await db.countrie.findAll({
      where: {
        name: country,
      },
    });

    newActivity.addCountrie(countryDb);

    return res.json({ message: `La Actividad ${name.toUpperCase()} se creo exitosamente` });
  } catch (error) {
    return res.send(`No se pudo crear la Actividad por: (${error})`);
  }
};

export const getAllActivities = async (_req: Request, res: Response) => {
  let allActivities = await db.activitie.findAll({
    include: {
      model: db.countrie,
      attributes: ['name', 'flags', 'continents', 'capital', 'subregion', 'area', 'population'],
      through: { attributes: [], },
    }
  });

  return res.json(allActivities);
}