'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { deleteGame, getAllGames } from '@/redux/Actions'
import { InitialState } from '@/types';
import Link from 'next/link';
import React, { useEffect } from 'react'
import { GamesGenres } from '../../../../interface';
import { Game } from './Game';

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
  return (
    <div>
      <Link href={'/create'} >
        <button>
          Crear VideoJuego
        </button>
      </Link>
      {
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
              />
              <button onClick={() => handlerDelete(el.id, el.name)} >Eliminar</button>
            </div>
          );
        })
      }
    </div>
  )
}
