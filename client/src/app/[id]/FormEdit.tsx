import Link from "next/link";
import { platforms } from '../components/AllPlatforms';

export const FormEdit = (
  {games,errors,handlerChanges,selectPlatforms,deletePlatforms,handlerSubmit,detail}: 
  // {games: any,errors: any,}
  any
) => {
  return (
    <form onSubmit={(e) => handlerSubmit(e)}>
      <div>
        <label>
          Name: <br></br>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Videogame"
          value={games.name}
          // value={detail?.name}
          onChange={(e) => handlerChanges(e)}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <br></br>

      <div>
        <label>
          Description: <br></br>
        </label>
        <textarea
          // type="text"
          name="description"
          placeholder="Enter a description"
          value={games.description}
          // value={detail?.description}
          onChange={(e) => handlerChanges(e)}
        />
        {errors.description && <p>{errors.description}</p>}
      </div>

      <br></br>

      <div>
        <label>
          Image: <br></br>
        </label>
        <input
          type="text"
          name="image"
          placeholder="Img URL"
          value={games.image}
          onChange={(e) => handlerChanges(e)}
        />
      </div>

      <br />

      <div>
        <label>
          Released: <br></br>
        </label>
        <input
          type="date"
          name="released"
          value={games.released}
          onChange={(e) => handlerChanges(e)}
        />
        {/* {errors.released && <p>{errors.released}</p>} */}
      </div>

      <br></br>

      <div>
        <label>
          Platforms: <br></br>
        </label>
        <select onChange={(e) => selectPlatforms(e)}>
          <option>Elije mínimo una Plataforma</option>
          {platforms.map((platform: {name:string}, index: number) => {
            return (
              <option key={index} value={platform.name}>
                {platform.name}
              </option>
            );
          })}
        </select>
        {games.platforms.map((el: string, index: number) => {
          return (
            <div key={index}>
              <p>{el}</p>
              <button onClick={() => deletePlatforms(el)}>X</button>
            </div>
          );
        })}
        {/* {errors.platforms && <p>{errors.platforms}</p>} */}
      </div>

      <div>
        <label>
          Rating: <br></br>
        </label>
        <input
          type="number"
          name="rating"
          placeholder="0.00 - 5.00"
          // step={0.01}
          // min={0.0}
          max={5}
          value={games.rating}
          onChange={(e) => handlerChanges(e)}
        />
      </div>

      <br></br>

      <button type="submit">Editar Video Juego</button>
      <br />
      <Link href={'/games'}>
        <button>Regresar</button>
      </Link>
    </form>
  );
}
