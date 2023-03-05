import { Column, ForeignKey, Model, Table } from "sequelize-typescript";
// import VideoGames from "./VideoGames";
import { Genres } from "./Genres";
import { VideoGames } from "./VideoGames";

@Table
// export default class GamesGenres extends Model {
export class GamesGenres extends Model {
    @ForeignKey(() => VideoGames)
    @Column
    games_id!: number

    @ForeignKey(() => Genres)
    @Column
    genres_id!: number
}