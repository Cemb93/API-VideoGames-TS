import { useAppDispatch } from '@/Hooks'
import { upDateGame } from '@/redux/Actions';
import { EditForm } from '@/types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { GamesGenres, IGenres } from '../../../../interface'

export const Game = (
  { id, name, image, released, rating, platforms, genres, handlerDelete }: 
  // GamesGenres
  any
) => {
  const dispatch = useAppDispatch();
  // const handlerEdit = (id: string, game: EditForm) => {
  //   dispatch(upDateGame(game, id));
  //   alert(`Presiona "Aceptar" para eliminar el juego: ${name.toUpperCase()}`);
  // }
  // const router = useRouter();
  return (
    <div>
      <p>Nombre: {name}</p>
      <p>Plataformas: {
        platforms.map((el: string) => {
          return (
            <ul key={el} >
              <li>{`✔ ${el}`}</li>
            </ul>
          );
        })  
      }</p>
      <p>Generos: {
        genres.map((el: string | IGenres, index: number) => (
          typeof el === 'object' ? (
            <ul key={index} >
              <li>DB: {`✔ ${el.name}`}</li>
            </ul>
          ) :  (
            <ul key={index} >
              <li>API: {`✔ ${el}`}</li>
            </ul>
          )
        ))  
      }</p>
      <button onClick={() => handlerDelete(id, name)} >Eliminar</button>
      <Link href={`/edit/[id]`} as={`/edit/${id}`} >
      {/* <Link href={`/edit/${id}`} > */}
      {/* <Link href={`/edit/${id}`} as={`/edit/${id}`} > */}
        {/* <button>Editar</button> */}
      </Link>
        {/* <button onClick={() => router.push(`/edit/${id}`)} >Editar</button> */}
    </div>
  );
}
