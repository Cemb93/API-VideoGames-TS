"use client"

import { useAppDispatch, useAppSelector } from '@/Hooks';
import { createGames, getGenres } from '@/redux/Actions';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FormCreate, FormError, InitialState } from '../../types/Forms';
import { FormCreated } from './FormCreated';

const CreatePage = () => {
  const formState: FormCreate = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [],
    genres: [],
  }
  const formError: FormError = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [],
    genres: [],
  }
  const [games, setGames] = useState<FormCreate>(formState);
  const [errors, setErrors] = useState<FormError>(formError);
  const {genres} = useAppSelector((state: InitialState) => state)
  const dispatch = useAppDispatch();
  const router = useRouter();
  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);

  const handlerChanges = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  function deleteGenres(el: string) {
    setGames({
      ...games,
      genres: games.genres.filter((ele: string) => ele !== el),
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
    router.push("/games");
  }

  return (
    <FormCreated
      games={games}
      errors={errors}
      genres={genres}
      handlerChanges={handlerChanges}
      SelectP={selectPlatforms}
      DeleteP={deletePlatforms}
      SelectG={selectGenres}
      DeleteG={deleteGenres}
      handlerSubmit={handlerSubmit}
    />
  );
}

export default CreatePage;