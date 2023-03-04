import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Genres } from "./Genres";
import Videogames from "./VideoGames";

@Table
export default class VideogamesGenres extends Model {
    @ForeignKey(() => Videogames)
    @Column
    games_id!: number

    @ForeignKey(() => Genres)
    @Column
    genres_id!: number
}