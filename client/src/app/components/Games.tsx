'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { deleteGame, getAllGames, upDateGame } from '@/redux/Actions'
import { EditForm, InitialState } from '@/types';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { GamesGenres } from '../../../../interface';
import { Game } from './Game';
import { Loading } from './Loading';

export const Games = () => {
  const {allGames} = useAppSelector((state: InitialState) => state)
  // console.log('ALL GAMES',allGames)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getAllGames())
  }, []);
  const handlerDelete = (id: string | undefined, name: string) => {
    dispatch(deleteGame(id));
    alert(`Presiona "Aceptar" para eliminar el juego: ${name.toUpperCase()}`);
  }
  // const handlerEdit = (game: EditForm, id: string) => {
  //   dispatch(upDateGame(game,id));
  //   alert(`Presiona "Aceptar" para editar el juego`);
  // }
  return (
    <div>
      <Link href={'/create'} >
        <button>
          Crear VideoJuego
        </button>
      </Link>
      {/* <Link href={'/edit'} >
        <button>
          Editar VideoJuego
        </button>
      </Link> */}
      {
        !allGames.length ? (
          <Loading/>
        ) : (
          allGames.map((el: GamesGenres) => {
            return (
              <div key={el.id} >
                <Game
                  id={el.id}
                  name={el.name}
                  image={el.image}
                  released={el.released}
                  rating={el.rating}
                  platforms={el.platforms}
                  genres={el.genres}
                  handlerDelete={handlerDelete}
                  // handlerEdit={handlerEdit}
                />
              </div>
            );
          })
        )
      }
    </div>
  )
}
