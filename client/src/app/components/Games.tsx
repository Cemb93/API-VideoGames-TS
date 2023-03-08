'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { getAllGames } from '@/redux/Actions'
import React, { useEffect } from 'react'
import { GamesGenres } from '../../../../api/src/interface';
import { Game } from './Game';

export const Games = () => {
  const {allGames} = useAppSelector((state) => state)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch<any>(getAllGames())
  }, [])
  return (
    <div>
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
                // platforms={!el.platforms.length ? el.platformsDb : el.platforms}
                platforms={el.platforms}
                // genres={!el.genres ? el.genresDb : el.genres}
                genres={el.genres}
              />
            </div>
          );
        })
      }
    </div>
  )
}
