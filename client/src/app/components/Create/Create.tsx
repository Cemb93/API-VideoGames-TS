"use client";

import { useAppDispatch, useAppSelector } from '@/Hooks';
import { createGames, getGenres } from '@/redux/Actions';
import React, { useEffect, useState } from 'react'
import { FormCreated } from './FormCreated';

export const Create = () => {
  const formState = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [''],
    // platformsDb: [''],
    genres: [''],
  }
  const [games, setGames] = useState(formState);
  const [errors, setErrors] = useState({});
  const {genres} = useAppSelector((state) => state)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch<any>(getGenres())
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

  const handlerChanges = (e: any) => {
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

  function selectPlatforms(e: any) {
    setGames({
      ...games,
      platforms: games.platforms.includes(e.target.value)
        ? games.platforms
        : [...games.platforms, e.target.value],
    });
  }

  function deletePlatforms(el: any) {
    setGames({
      ...games,
      platforms: games.platforms.filter((ele) => ele !== el),
    });
  }

  function selectGenres(e: any) {
    setGames({
      ...games,
      genres: games.genres.includes(e.target.value)
        ? games.genres
        : [...games.genres, e.target.value],
    });
  }

  function deleteGenres(el: any) {
    setGames({
      ...games,
      genres: games.genres.filter((genre) => genre !== el),
    });
  }
  function handlerSubmit(e: any) {
    e.preventDefault();
    // setErrors(
    //   validation({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );

    dispatch<any>(createGames(games));
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
  )
}
