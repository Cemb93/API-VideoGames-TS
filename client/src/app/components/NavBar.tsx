import { useAppDispatch, useAppSelector } from '@/Hooks';
import { getGenres } from '@/redux/Actions';
import React, { useEffect } from 'react';
import { GenerosApi } from '../../../../interface/Games';
import { INavbar } from '../../../../interface/Destructuring';
import { InitialState } from '../../types/Forms';
import SearchBar from './SearchBar';

export default function NavBar(
  { filterGenre, filterCreated, sortName, sortRating, selects }:
  INavbar
) {
  const { genres } = useAppSelector((state: InitialState) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);
  return (
    <div>
      <div>
        <SearchBar/>
      </div>
      <select
        onChange={(e) => filterGenre(e)}
        value={selects.genres}
      >
        <option value="All">All Genres</option>
        {genres.map((genre: GenerosApi, idx: number) => {
          return (
            // <option key={genre.id} value={genre.name} >
            <option key={idx} value={genre.name} >
              {genre.name}
            </option>
          );
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
        value={selects.orderName}
      >
        <option value="null">Sort by name</option>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <select
        onChange={(e) => sortRating(e)}
        value={selects.orderRating}
      >
        <option value="null">Sort by rating</option>
        <option value="higher rating">Higher rating</option>
        <option value="lower rating">Lower rating</option>
      </select>
    </div>
  );
}
