import { Request, Response } from 'express';
import { getAllCountries } from '../../controllers/Countries/getCountries';
import { CountriesActivites } from '../../../../interface/Countries';
import db from '../../models/db';
import { Op } from 'sequelize';

export const Countries = async (req: Request, res: Response) => {
  const { name, filtercontinent, filterActivity, page, order } = req.query;
  try {
    // const dataApi = await getAllCountries();
    await getAllCountries();
    if (typeof name === 'string') {
      const byName = await db.countrie.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          }
        },
        include: {
          model: db.activitie,
          attributes: ["id", "name", "difficulty", "season", "duration"],
          through: {
            attributes: [],
          },
        }
      });

      return res.json(byName);
    } else if (filterActivity || filtercontinent) {
      
      const filters = await db.countrie.findAll({
        where: {
          //* Se filtra por status
          //! Se pueden filtros combinados, pero no pueden ser opcionales
          continent: filtercontinent,
          activities: filterActivity,
        },
        //! Paginado hecho desde el back-end
        offset: page,//* Inicial de paginado
        limit: 6,//* Trae los personajes del 1 - 6
        //! Paginado hecho desde el back-end
        order: [["name", "population", order]],//* ASC - DESC
        include: {
          model: db.activitie,
          attributes: ["id", "name", "difficulty", "season", "duration"],
          through: { attributes: [], },
        }
      });
      
      return res.json(filters);
    } else {
      const allCountries = await db.countrie.findAll({
        //! Paginado hecho desde el back-end
        offset: page,//* Inicial de paginado
        limit: 6,//* Final paginado
        //! Paginado hecho desde el back-end
        order: [["name", "population", order]],//* ASC - DESC
        include: {
          model: db.activitie,
          attributes: ["id", "name", "difficulty", "season", "duration"],
          through: { attributes: [], },
        }
      });

      return res.json(allCountries);
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