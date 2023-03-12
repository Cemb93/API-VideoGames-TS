"use client";

import { useAppDispatch, useAppSelector } from "@/Hooks";
import { getDetailGame } from "@/redux/Actions";
import { InitialState } from "@/types";
import Link from "next/link";
import React, { useEffect } from "react";
import { PropsParmas } from "../../../../interface/PropsParams";

export default function DetailPage(props: PropsParmas) {
// export default function DetailPage(props: any) {
  console.log('MIS PROPS DE DETALLE:', props)
  const dispatch = useAppDispatch();
  // const { id } = useParams();
  // const { id } = props.match.params;
  const { id } = props.params;
  // console.log('ID DE DETALLE:', id);
  
  useEffect(() => {
    dispatch(getDetailGame(id));
  }, [dispatch, id]);

  const {detail} = useAppSelector((state: InitialState) => state);
  // console.log("MI DETALLE:", detail);

  return (
    <div>
      {detail ? (
        <div>
          <p>
            <strong>Nombre: </strong>
            {detail.name}
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
              detail.genres?.map(genre => typeof genre === 'object'? genre.name + ', ' : genre + ', ')
            }
          </p>
          <p>
            <strong>Calificación: </strong>
            {detail.rating}
          </p>
          <p>
            <strong>Descripción: </strong>
            {/* {detail.description || detail.description_raw} */}
            {detail.description}
          </p>
          <p>
            <strong>Plataformas: </strong>
            {detail.platforms?.map(platform => platform + ', ')}
          </p>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
      <div>
        <Link href={"/"}>
          <button>Regresar</button>
        </Link>
      </div>
    </div>
  );
}
