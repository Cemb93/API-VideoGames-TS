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

const GamesPage = () => {
  const {allGames} = useAppSelector((state: InitialState) => state)
  // console.log('ALL GAMES',allGames)
  const [selects, setSelects] = useState({
    order: '',
    genres: '',
    created: '',
    // years: '',
  });
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllGames())
  }, []);

  const genreHandler = (e: any) => {
    e.preventDefault();
    setSelects({
      order: '',
      created: '',
      // years: '',
      genres: e.target.value,
    });
    dispatch(filterByGenre(e.target.value));
    // setCurrentPage(1);
  };

  const createdGameHandler = (e: any) => {
    e.preventDefault();
    setSelects({
      order: '',
      genres: '',
      created: e.target.value,
    });
    dispatch(filterByCreation(e.target.value));
    // setCurrentPage(1);
  };

  const sortHandler = (e: any) => {
    e.preventDefault();
    if (e.target.value === 'A-Z' || e.target.value === 'Z-A') {
      dispatch(orderByName(e.target.value));
      setSelects({
        created: '',
        genres: '',
        // years: '',
        order: `${e.target.value}`,
      });
      // setCurrentPage(1);
    }
    if (
      e.target.value === 'higher rating' ||
      e.target.value === 'lower rating'
    ) {
      dispatch(orderByRating(e.target.value));
      setSelects({
        created: '',
        genres: '',
        // years: '',
        order: `${e.target.value}`,
      });
      // setCurrentPage(1);
    }
    if (e.target.value === 'null') {
      // dispatch(cleanVideogamesState());
      dispatch(getAllGames());
      setSelects({
        created: '',
        genres: '',
        // years: '',
        order: `${e.target.value}`,
      });
      // setCurrentPage(1);
    }
  };
  const resetFiltersHandler = (e:any) => {
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
  const resetGames = (e:any) => {
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
  );
}

export default GamesPage;