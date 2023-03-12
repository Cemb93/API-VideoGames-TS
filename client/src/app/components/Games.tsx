'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { getAllGames } from '@/redux/Actions'
import { InitialState } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { GamesGenres } from '../../../../interface';
import { Game } from './Game';
import { Loading } from './Loading';

export const Games = () => {
  const {allGames} = useAppSelector((state: InitialState) => state)
  // console.log('ALL GAMES',allGames)
  const dispatch = useAppDispatch()
  const router = useRouter();
  useEffect(() => {
    dispatch(getAllGames())
  }, []);
  return (
    <div>
      <Link href={'/create'} >
        <button>
          Crear VideoJuego
        </button>
      </Link>
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
                />
              </div>
            );
          })
        )
      }
    </div>
  )
}
