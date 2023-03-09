'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { getAllGames } from '@/redux/Actions'
import React, { useEffect } from 'react'
import { GamesGenres, IGenres } from '../../../../api/src/interface';
import { Game } from './Game';

export const Games = () => {
  const {allGames} = useAppSelector((state) => state)
  console.log('ALL GAMES',allGames)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch<any>(getAllGames())
  }, [])
  return (
    <div>
      {
        allGames.map((el: GamesGenres) => {
          let GenresDb = el.genresDb?.map((el: IGenres) => el.name)
          console.log('GENEROS DB:',GenresDb?.length)
          let Genres = el.genres.map((el: string) => el)
          console.log('GENEROS API:', Genres)
          return (
            <div key={el.id} >
              <Game
                id={el.id}
                name={el.name}
                image={el.image}
                released={el.released}
                rating={el.rating}
                platforms={!el.platformsDb?.length ? el.platforms : el.platformsDb}
                // platforms={el.platforms}
                // genres={!el.genresDb?.length ? el.genres : el.genresDb}
                genres={!GenresDb?.length ? Genres : GenresDb}
                // genres={el.genres}
              />
            </div>
          );
        })
      }
    </div>
  )
}
