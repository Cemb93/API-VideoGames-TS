'use client';

import { useAppDispatch, useAppSelector } from '@/Hooks'
import { filterByCreation, filterByGenre, getAllGames, orderByName, orderByRating } from '@/redux/Actions'
import { InitialState } from '@/types';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { GamesGenres } from '../../../../interface';
import { Game } from './Game';
import { Loading } from '../components/Loading';
import SearchBar from '../components/SearchBar';
import NavBar from '../components/NavBar';
import { FilterOrder } from '../components/FilterOrder';
import s from '../styles/Games.module.css';

const GamesPage = () => {
  const {allGames} = useAppSelector((state: InitialState) => state)
  // console.log('ALL GAMES',allGames)
  const [selects, setSelects] = useState({
    orderName: '',
    orderRating: '',
    genres: '',
    created: '',
  });
  // console.log('SELECT:', selects)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGames())
  }, [dispatch]);

  const filterGenre = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log('EVENTO GENERO:',e.target)
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

  const resetfilters = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(getAllGames());
    setSelects({
      orderName: '',
      orderRating: '',
      genres: '',
      created: '',
    });
  };

  const resetGames = (e:React.MouseEvent<HTMLButtonElement>) => {
    resetfilters(e);
  };

  return (
    <div>
      <Link href={'/create'} >
        <button>
          Crear VideoJuego
        </button>
      </Link>
      <div>
        <SearchBar/>
      </div>
      <div>
        <NavBar
          filterGenre={filterGenre}
          filterCreated={filterCreated}
          sortName={sortName}
          sortRating={sortRating}
          resetfilters={resetfilters}
          // searchGame={searchGame}
          resetGames={resetGames}
          selects={selects}
        />
      </div>
      <div>
        {/* <FilterOrder
          orders={orders}
          setOrders={setOrders}
          filters={filters}
          setFilters={setFilters}
        /> */}
      </div>
      <button onClick={() => dispatch(getAllGames())} >
        Traer todos los juegos
      </button>
      <div className={s.allGames} >
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
    </div>
  );
}

export default GamesPage;