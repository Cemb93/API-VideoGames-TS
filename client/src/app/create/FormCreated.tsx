import Link from "next/link";
import { GenerosApi, EndPointP } from "../../../../interface";
import { platforms } from "../components/AllPlatforms";
import {IFormCreated} from "../../../../interface/Destructuring";

export const FormCreated = (
  {games,errors,genres,handlerChanges,SelectP,DeleteP,SelectG,DeleteG,handlerSubmit,}: 
  IFormCreated
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
        <select onChange={(e) => SelectP(e)}>
          <option>Elije mínimo una Plataforma</option>
          {platforms.map((el: EndPointP) => {
            return (
              <option key={el.id} >
                {el.name}
              </option>
            );
          })}
        </select>
        {games.platforms.map((el: string, index: number) => {
          return (
            <div key={index}>
              <p>{el}</p>
              <div onClick={() => DeleteP(el)}>[X]</div>
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
          step={0.01}
          min={0.0}
          max={5}
          value={games.rating}
          onChange={(e) => handlerChanges(e)}
        />
      </div>

      <br></br>

      <div>
        <label>
          Genres: <br></br>
        </label>
        <select onChange={(e) => SelectG(e)}>
          <option>Elije mínimo un Genero</option>
          {genres.map((genre: GenerosApi) => {
            return (
              <option key={genre.id} >
                {genre.name}
              </option>
            );
          })}
        </select>
        {games.genres.map((el: string, index: number) => {
          return (
            <div key={index}>
              <p>{el}</p>
              <div onClick={() => DeleteG(el)}>[X]</div>
            </div>
          );
        })}
      </div>

      {/* <button type="submit">Crear Video Juego</button> */}
      <input type="submit" value="Crear Video Juego" />
      <br />
      <Link href={'/games'}>
        <button>Regresar</button>
      </Link>
    </form>
  );
}