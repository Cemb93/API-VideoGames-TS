'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { filterByCreation, filterByGenre, getAllGames, orderByName, orderByRating } from '@/redux/Actions'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GamesGenres } from '../../../../interface';
import { Game } from './Game';
import { Loading } from '../components/Loading';
import NavBar from '../components/NavBar';
import s from '../styles/Games.module.css';
import { InitialState } from '../../types/Forms';

const GamesPage = () => {
  const {allGames} = useAppSelector((state: InitialState) => state)
  // console.log('ALL GAMES',allGames)
  const [selects, setSelects] = useState({
    orderName: '',
    orderRating: '',
    genres: '',
    created: '',
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGames())
  }, [dispatch]);

  const filterGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelects({
      orderName: '',
      orderRating: '',
      genres: e.target.value,
      created: '',
    });
    dispatch(filterByGenre(e.target.value));
  };

  const filterCreated = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelects({
      orderName: '',
      orderRating: '',
      genres: '',
      created: e.target.value,
    });
    dispatch(filterByCreation(e.target.value));
  };

  const sortName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    e.preventDefault();
    if (value === 'A-Z' || value === 'Z-A') {
      dispatch(orderByName(value));
      setSelects({
        orderName: value,
        orderRating: '',
        genres: '',
        created: '',
      });
    }
  };

  const sortRating = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {value} = e.target;
    e.preventDefault();
    if (value === 'higher rating' || value === 'lower rating') {
      dispatch(orderByRating(value));
      setSelects({
        orderName: '',
        orderRating: value,
        genres: '',
        created: '',
      });
    }
  };

  //! PENDIENTE SCROLL INFINITO CON INTERSECTION OBSERVER

  return (
    <div>
      <h1>API COUNTRIES</h1>
      <Link href={'/create'} >
        <button>
          Crear nuevo juego
        </button>
      </Link>
      <button onClick={() => dispatch(getAllGames())} >
        Traer todos los juegos
      </button>
      <nav>
        <NavBar
          filterGenre={filterGenre}
          filterCreated={filterCreated}
          sortName={sortName}
          sortRating={sortRating}
          selects={selects}
        />
      </nav>
      <main className={s.allGames} >
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
      </main>
    </div>
  );
}

export default GamesPage;