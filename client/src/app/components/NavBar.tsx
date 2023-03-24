import { useAppDispatch, useAppSelector } from '@/Hooks';
import { getGenres } from '@/redux/Actions';
import { InitialState } from '@/types';
import React, { useEffect } from 'react';
import { GenerosApi } from '../../../../interface';

export default function NavBar(
  { filterGenre, filterCreated, sortName, sortRating, resetfilters, resetGames, selects }:
    any
) {
  const { genres } = useAppSelector((state: InitialState) => state);
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
      <select
        onChange={(e) => filterGenre(e)}
        value={selects.genres}
      >
        <option value="All">All Genres</option>
        {genres.map((genre: GenerosApi) => {
          return <option key={genre.id} value={genre.name} >
            {genre.name}
          </option>
        })}
      </select>
      <select
        onChange={(e) => filterCreated(e)}
        value={selects.created}
      >
        <option value="All Games">All Videogames</option>
        <option value="Original Games">Original Videogames</option>
        <option value="Added Games">Added Videogames</option>
      </select>
      <select
        onChange={(e) => sortName(e)}
        value={selects.order}
      >
        <option value="null">Sort by name</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
        {/* <option value="higher rating">Higher rating</option>
        <option value="lower rating">Lower rating</option> */}
      </select>
      <select
        onChange={(e) => sortRating(e)}
        value={selects.order}
      >
        <option value="null">Sort by rating</option>
        {/* <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option> */}
        <option value="higher rating">Higher rating</option>
        <option value="lower rating">Lower rating</option>
      </select>
      <button
        onClick={(e) => resetfilters(e)}
      >
        Reset filters
      </button>
    </div>
  );
}
