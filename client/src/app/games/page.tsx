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
import s from '../styles/Games.module.css';
import { BACK } from '@/redux/Action-Types';
const url = 'https://api.rawg.io/api/games?key=1fdada09a1ba470984c5234110f3638f'

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
  const [pages, setPages] = useState<number>(1);
  const [coinsData, setCoinsData] = useState<[]>([]);
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

  //! PENDIENTE SCROLL INFINITO
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(`${url}&page=${pages}`)
  //         .then((data:any) => data.json())
  //         .then((r:any) => console.log('ERRERRRR:', r))
  //       console.log('RES:', res)
  //       // setCoinsData((prev:number[]):any => [...prev, ...res.data])
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchData();
  // }, [pages]);

  // const scrollInfinity = () => {
  //   let scrollHeight = document.documentElement.scrollHeight;
  //   let scrollTop = document.documentElement.scrollTop;
  //   let innerHeight = window.innerHeight;
  //   if (innerHeight + scrollTop + 1 >= scrollHeight) {
  //     setPages((prev: number) => prev + 1);
  //   }
  // }

  // useEffect(() => {
  //   const scrollInfinity = (e:any) => {
  //     let scrollTop = document.documentElement.scrollTop;
  //     let scrollHeight = document.documentElement.scrollHeight+window.innerHeight;
  //     if (scrollHeight + 1 >= scrollTop) {
  //       setPages(pages + 5);
  //     }
  //   }
  //   window.addEventListener('scroll', scrollInfinity);
  //   return () => window.removeEventListener('scroll', scrollInfinity)
  // }, [pages]);

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