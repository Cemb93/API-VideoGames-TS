import { useAppDispatch } from '@/Hooks'
import { deleteGame } from '@/redux/Actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { GamesGenres, IGenres } from '../../../../interface'

export const Game = (
  { id, name, image, released, rating, platforms, genres, }: 
  GamesGenres
) => {
  const dispatch = useAppDispatch();
  const handlerDelete = (id: string | undefined, name: string) => {
    dispatch(deleteGame(id));
    alert(`Presiona "Aceptar" para eliminar el juego: ${name.toUpperCase()}`);
  }
  // const router = useRouter();
  return (
    <div>
      <p>Nombre: {name}</p>
      {/* <Link href={`/game/${id}`} > */}
      <Link href={`/${id}`} >
      <img src={image} alt={name} width={'400px'} height={'250px'} />
      </Link>
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
      {/* <button onClick={() => router.push(`/edit/${id}`)} >Editar</button> */}
    </div>
  );
}
