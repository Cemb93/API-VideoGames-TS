import { useAppDispatch, useAppSelector } from '@/Hooks';
import { getGenres } from '@/redux/Actions';
import { InitialState } from '@/types';
import React, { useEffect } from 'react';
import { GenerosApi } from '../../../../interface';

export default function NavBar(
  { genreHandler, createdGameHandler, sortHandler, resetFiltersHandler, resetGames, selects }:
    any
) {
  const { genres } = useAppSelector((state: InitialState) => state);
  console.log('GENRES:', genres)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  return (
    <div>
      <button onClick={(e) => resetGames(e)}>
        All videogames
      </button>
      <h3>Filters</h3>
      {/*select con 20 options => 19generos y all games */}
      <select
        onChange={(e) => genreHandler(e)}
        value={selects.genres}
      >
        <option value="All Genres">All Genres</option>
        {genres.map((genre: GenerosApi) => {
          return <option key={genre.id} >
            {genre.name}
          </option>
        })}
      </select>
      {/*select con 3 options */}
      <select
        onChange={(e) => createdGameHandler(e)}
        value={selects.created}
      >
        <option value="All Games">All Videogames</option>
        <option value="Original Games">Original Videogames</option>
        <option value="Added Games">Added Videogames</option>
      </select>
      {/*select con 5 options */}
      <select
        onChange={(e) => sortHandler(e)}
        value={selects.order}
      >
        <option value="null">Sort by</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        <option value="higher rating">Higher rating</option>
        <option value="lower rating">Lower rating</option>
      </select>
      <button
        onClick={(e) => resetFiltersHandler(e)}
      >
        Reset filters
      </button>
    </div>
  );
}
