"use client";

import { useAppDispatch, useAppSelector } from '@/Hooks';
import { createGames, getGenres } from '@/redux/Actions';
import { FormCreate, InitialState } from '@/types';
import React, { useEffect, useState } from 'react'
import { IGenres } from '../../../../../interface';
import { FormCreated } from './FormCreated';

export const Create = () => {
  const formState: FormCreate = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [''],
    genres: [''],
  }
  const [games, setGames] = useState<FormCreate>(formState);
  const [errors, setErrors] = useState({});
  const {genres} = useAppSelector((state: InitialState) => state)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);
  const platforms_api = [
    "PC",
    "PlayStation 5",
    "PlayStation 4",
    "PlayStation 3",
    "Xbox One",
    "Xbox Series S/X",
    "Xbox 360",
    "Xbox",
    "Nintendo Switch",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "iOS",
    "Android",
    "macOS",
    "Linux",
  ];

  const handlerChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGames({
      ...games,
      [e.target.name]: e.target.value,
    });
    // setErrors(
    //   validation({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );
  }

  function selectPlatforms(e: React.ChangeEvent<HTMLSelectElement>) {
    setGames({
      ...games,
      platforms: games.platforms.includes(e.target.value)
        ? games.platforms
        : [...games.platforms, e.target.value],
    });
  }

  function deletePlatforms(el: string) {
    setGames({
      ...games,
      platforms: games.platforms.filter((ele: string) => ele !== el),
    });
  }

  function selectGenres(e: React.ChangeEvent<HTMLSelectElement>) {
    setGames({
      ...games,
      genres: games.genres.includes(e.target.value)
        ? games.genres
        : [...games.genres, e.target.value],
    });
  }

  function deleteGenres(el: IGenres) {
    setGames({
      ...games,
      genres: games.genres.filter((ele: string) => ele !== el.name),
    });
  }

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setErrors(
    //   validation({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );

    dispatch(createGames(games));
    alert("Has creado un nuevo Video Juego!!! 🤩");

    //* Seteo todo el input desde CERO
    setGames(games);
    // history.push("/home");
  }
  
  return (
    <FormCreated
      games={games}
      errors={errors}
      handlerChanges={handlerChanges}
      selectPlatforms={selectPlatforms}
      deletePlatforms={deletePlatforms}
      selectGenres={selectGenres}
      deleteGenres={deleteGenres}
      handlerSubmit={handlerSubmit}
      platforms_api={platforms_api}
      genres={genres}
    />
  );
}
