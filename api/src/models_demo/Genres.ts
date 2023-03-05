import { BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Generos, IVideoGames } from '../interface';
import { GamesGenres } from './GamesGenres';
import { VideoGames } from './VideoGames';

@Table({
  timestamps: true,
})
@Table
export class Genres extends Model<Generos> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id!: number

  @Column({
    type: DataType.STRING,
  })
  name!: string

  // @BelongsToMany(() => VideoGames,{ as: 'members', through: () => GamesGenres })
  @BelongsToMany(() => VideoGames, () => GamesGenres)
  videogames!: IVideoGames[]

  // active!: boolean
}

// import { Entity, Column, BaseEntity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
// import { VideoGames } from './IVideoGames';

// //* SE CREA LA TABLA
// //! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
// @Entity()
// export class Genres extends BaseEntity {//* BaseEntity, para que funcionen los metodos
//   @PrimaryColumn()
//   id!: number

//   @Column()
//   name!: string

//   @ManyToMany(() => VideoGames)
//   @JoinTable()
//   videogames!: VideoGames[]

//   active!: boolean
// }