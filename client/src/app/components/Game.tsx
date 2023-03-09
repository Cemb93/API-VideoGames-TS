import React from 'react'
import { GamesGenres, IGenres } from '../../../../api/src/interface'

export const Game = (
  { id, name, image, released, rating, platforms, genres }: 
  GamesGenres
) => {
  // console.log(genres)
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
        // genres.map((el: string) => (
            // <ul key={el} >
            //   <li>{`✔ ${el}`}</li>
            // </ul>
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
    </div>
  )
}
