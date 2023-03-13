"use client"

import { useAppDispatch, useAppSelector } from '@/Hooks';
import { upDateGame } from '@/redux/Actions';
import { EditForm, InitialState } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { PropsParams } from '../../../../interface/PropsParams';
import { FormEdit } from './FormEdit';

const EditPage = (props: PropsParams) => {
  const formState: EditForm = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [''],
  }
  const [games, setGames] = useState<EditForm>(formState);
  const [errors, setErrors] = useState({});
  const {genres, detail} = useAppSelector((state: InitialState) => state)
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = props.params;
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

  function handlerSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // setErrors(
    //   validation({
    //     ...input,
    //     [e.target.name]: e.target.value,
    //   })
    // );

    dispatch(upDateGame(games, id));
    alert("Has modificado el Video Juego!!! 🤩");

    //* Seteo todo el input desde CERO
    setGames(games);
    router.push("/games");
  }
  
  return (
    <FormEdit
      games={games}
      errors={errors}
      handlerChanges={handlerChanges}
      selectPlatforms={selectPlatforms}
      deletePlatforms={deletePlatforms}
      handlerSubmit={handlerSubmit}
      platforms_api={platforms_api}
      genres={genres}
      detail={detail}
    />
  );
}

export default EditPage;