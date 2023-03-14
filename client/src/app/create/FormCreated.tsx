import Link from "next/link";
import { GenerosApi } from "../../../../interface";

export const FormCreated = (
  {games,errors,handlerChanges,selectPlatforms,deletePlatforms,selectGenres,deleteGenres,handlerSubmit,platforms_api,genres}: 
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
        <select onChange={(e) => selectPlatforms(e)}>
          <option>Elije mínimo una Plataforma</option>
          {platforms_api.map((platform: string, index: number) => {
            return (
              <option key={index} value={platform}>
                {platform}
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

      <div>
        <label>
          Genres: <br></br>
        </label>
        <select onChange={(e) => selectGenres(e)}>
          <option>Elije mínimo un Genero</option>
          {genres.map((genre: GenerosApi) => {
            return (
              <option key={genre.id} value={genre.name}>
                {genre.name}
              </option>
            );
          })}
        </select>
        {games.genres.map((el: string, index: number) => {
          return (
            <div key={index}>
              <p>{el}</p>
              <button onClick={() => deleteGenres(el)}>X</button>
            </div>
          );
        })}
      </div>

      <button type="submit">Crear Video Juego</button>
      <br />
      <Link href={'/games'}>
        <button>Regresar</button>
      </Link>
    </form>
  );
}