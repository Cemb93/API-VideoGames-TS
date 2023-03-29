"use client"

import { useAppDispatch, useAppSelector } from '@/Hooks';
import { getDetailGame, upDateGame } from '@/redux/Actions';
import { EditError, EditForm, InitialState } from '@/types/Forms';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { PropsParams } from '../../../../interface/PropsParams';
import { FormEdit } from './FormEdit';

const EditPage = (props: PropsParams) => {
  const formState: EditForm = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [],
  }
  const [games, setGames] = useState<EditForm>(formState);
  
  const formError: EditError = {
    name: '',
    image: '',
    description: '',
    released: '',
    rating: 0,
    platforms: [],
  }
  const [errors, setErrors] = useState<EditError>(formError);
  const {detail} = useAppSelector((state: InitialState) => state)
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { id } = props.params;

  useEffect(() => {
    if ((detail?.id === id)) {
      dispatch(getDetailGame(id));
      setGames(games);
    }
  }, [detail]);

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
      detail={detail}
      handlerChanges={handlerChanges}
      SelectP={selectPlatforms}
      DeleteP={deletePlatforms}
      handlerSubmit={handlerSubmit}
    />
  );
}

export default EditPage;