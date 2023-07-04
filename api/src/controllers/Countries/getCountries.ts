import axios from 'axios';
import { CountriesApi } from '../../../../interface/Countries';
import db from '../../models/db';
const { COUNTRIES } = process.env;

export const getAllCountries = async () => {
  try {
    const country_DB = await db.countrie.findAll({
      include: {
        model: db.activitie,
        attributes: ['id', 'name', 'difficulty', 'duration', 'season'],
        through: { attributes: [], },
      }
    });
  
    if (!country_DB.length && typeof COUNTRIES === 'string') {
      let allCountries = (await axios(COUNTRIES)).data.map((el: CountriesApi) => {
        let arr_capital: string[] = [];
        if (el.capital !== undefined) {
          arr_capital = el.capital.map((el: string) => el);
        }
        return {
          cca3: el.cca3,
          name: el.name.common,
          flags: el.flags[1],//* IMG
          continents: el.continents[0],
          capital: arr_capital.length >= 1 && arr_capital[0],
          subregion: el.subregion,
          area: el.area,
          population: el.population,
        }
      });
      allCountries = await db.countrie.bulkCreate(allCountries);
    
      return allCountries; 
    } else {
      return country_DB;
    }
  } catch (error) {
    throw new Error(`Error en Countries API por: ` + error);
  }
}
