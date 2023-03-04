import { BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Generos } from '../interface';
import VideogamesGenres from './GamesGenres';
import Videogames from './VideoGames';

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

  // @BelongsToMany(() => Videogames,{ as: 'members', through: () => VideogamesGenres })
  @BelongsToMany(() => Videogames, () => VideogamesGenres)
  videogames!: Videogames[]

  active!: boolean
}

// import { Entity, Column, BaseEntity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
// import { Videogames } from './VideoGames';

// //* SE CREA LA TABLA
// //! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
// @Entity()
// export class Genres extends BaseEntity {//* BaseEntity, para que funcionen los metodos
//   @PrimaryColumn()
//   id!: number

//   @Column()
//   name!: string

//   @ManyToMany(() => Videogames)
//   @JoinTable()
//   videogames!: Videogames[]

//   active!: boolean
// }