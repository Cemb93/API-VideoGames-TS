"use client";

import { useAppDispatch, useAppSelector } from "@/Hooks";
import { getDetailGame } from "@/redux/Actions";
import { InitialState } from "@/types/Forms";
import Link from "next/link";
import React, { useEffect } from "react";
import { PropsParams } from "../../../../../interface/PropsParams";
import { Loading } from "../../components/Loading";
import { IGenres } from "../../../../../interface/IGames";

export default function DetailPage(props: PropsParams) {
  const dispatch = useAppDispatch();
  const { id } = props.params;
  
  useEffect(() => {
    dispatch(getDetailGame(id));
  }, [dispatch, id]);

  const {detail} = useAppSelector((state: InitialState) => state);

  return (
    <div>
      {detail ? (
        <div>
          <p>
            <strong>Nombre: </strong>
            {detail.name.replace(/\b\w/g, (l: string) => l.toUpperCase())}
          </p>
          <img
            src={detail.image}
            alt="img not found"
            width="500px"
            height="300px"
          />
          <p>
            <strong>Fecha de creación: </strong>
            {detail.released}
          </p>
          <p>
            <strong>Generos: </strong>
            {
              detail.genres.map((genre: IGenres | string) => typeof genre === 'object'? genre.name + ', ' : genre + ', ')
            }
          </p>
          <p>
            <strong>Calificación: </strong>
            {detail.rating}
          </p>
          <p>
            <strong>Descripción: </strong>
            {detail.description}
          </p>
          <p>
            <strong>Plataformas: </strong>
            {detail.platforms.map((platform: string) => platform + ', ')}
          </p>
        </div>
      ) : (
        <Loading/>
      )}
      <div>
        <Link href={"/games"}>
          <button>Regresar</button>
        </Link>
      </div>
    </div>
  );
}
