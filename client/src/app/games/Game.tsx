import { useAppDispatch } from '@/Hooks'
import { deleteGame } from '@/redux/Actions';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { GamesGenres, IGenres } from '../../../../interface/Games'

export const Game = (
  { id, name, image, released, rating, platforms, genres }: 
  GamesGenres
) => {
  const dispatch = useAppDispatch();
  const handlerDelete = (id: string, name: string) => {
    dispatch(deleteGame(id));
    alert(`Presiona "Aceptar" para eliminar el juego: ${name.toUpperCase()}`);
  }
  const router = useRouter();
  return (
    <div>
      {
        typeof id === 'string' ? (
          //? convierte la "primer" letra de cada palabra en "mayuscula"
          <p>Nombre: {name.replace(/\b\w/g, l => l.toUpperCase())}</p>
        ) : (
          <p>Nombre: {name}</p> 
        )
      }
      <Link href={`/games/${id}`} >
        <img src={image} alt={name} width={'250px'} height={'150px'} />
      </Link>
      <p>Fecha de lanzamiento: {released}</p>
      <p>Calificación: {rating}</p>
      <p>Generos: {
        genres.map((el: string | IGenres, index: number) => (
          typeof el === 'object' ? (
            <ul key={index} >
              <li>{`✔ ${el.name}`}</li>
            </ul>
          ) :  (
            <ul key={index} >
              <li>{`✔ ${el}`}</li>
            </ul>
          )
        ))  
      }</p>
      <p>Plataformas: {
        platforms.map((el: string) => {
          return (
            <ul key={el} >
              <li>{`✔ ${el}`}</li>
            </ul>
          );
        })  
      }</p>
      {
        typeof id === 'string' && (
          <div>
            <button onClick={() => handlerDelete(id, name)} >Eliminar</button>
            <button onClick={() => router.push(`/${id}`)} >Editar</button>
          </div>
        )
      }
    </div>
  );
}
