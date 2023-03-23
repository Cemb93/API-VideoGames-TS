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
    order: '',
    genres: '',
    created: '',
    // years: '',
  });
  // console.log('SELECT:', selects)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGames())
  }, [dispatch]);

  const genreHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log('EVENTO GENERO:',e.target)
    e.preventDefault();
    setSelects({
      order: '',
      genres: e.target.value,
      created: '',
      // years: '',
    });
    dispatch(filterByGenre(e.target.value));
    // setCurrentPage(1);
  };

  const createdGameHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelects({
      order: '',
      genres: '',
      created: e.target.value,
    });
    dispatch(filterByCreation(e.target.value));
    // setCurrentPage(1);
  };

  const sortHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    if (e.target.value === 'A-Z' || e.target.value === 'Z-A') {
      dispatch(orderByName(e.target.value));
      setSelects({
        order: `${e.target.value}`,
        genres: '',
        created: '',
        // years: '',
      });
      // setCurrentPage(1);
    }
    if (
      e.target.value === 'higher rating' ||
      e.target.value === 'lower rating'
    ) {
      dispatch(orderByRating(e.target.value));
      setSelects({
        order: `${e.target.value}`,
        genres: '',
        created: '',
        // years: '',
      });
      // setCurrentPage(1);
    }
    if (e.target.value === 'null') {
      // dispatch(cleanVideogamesState());
      dispatch(getAllGames());
      setSelects({
        order: `${e.target.value}`,
        genres: '',
        created: '',
        // years: '',
      });
      // setCurrentPage(1);
    }
  };
  const resetFiltersHandler = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // dispatch(cleanVideogamesState());
    dispatch(getAllGames());
    setSelects({
      order: '',
      genres: '',
      created: '',
      // years: '',
    });
    // setCurrentPage(1);
  };
  const resetGames = (e:React.MouseEvent<HTMLButtonElement>) => {
    resetFiltersHandler(e);
  };

  // const [orders, setOrders] = useState({});
  // const [filters, setFilters] = useState({});

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
          genreHandler={genreHandler}
          createdGameHandler={createdGameHandler}
          sortHandler={sortHandler}
          resetFiltersHandler={resetFiltersHandler}
          // searchGame={searchGame}
          resetGames={resetGames}
          // yearsHandler={yearsHandler}
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