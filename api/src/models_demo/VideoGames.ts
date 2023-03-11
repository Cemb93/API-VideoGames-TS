import { BelongsToMany, Column, DataType, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { IVideoGames } from '../../../interface';
import { GamesGenres } from './GamesGenres';
import { Genres } from './Genres';

@Table
// export default class VideoGames extends Model<IVideoGames> {
export class VideoGames extends Model<IVideoGames> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id!: string

  @Column({
    type: DataType.STRING,
  })
  name!: string

  @Column({
    type: DataType.STRING,
  })
  description!: string

  @Column({
    type: DataType.STRING,
  })
  released!: string

  @Column({
    type: DataType.FLOAT,
  })
  rating!: number

  @Column({
    type: DataType.ARRAY(DataType.STRING),
  })
  platforms!: string[]

  @Column({
    type: DataType.STRING,
    // defaultValue: 'https://www.xtrafondos.com/wallpaper/3840x2160/6406-parado-en-el-borde-de-dos-mundos.html',
  })
  // image!: string
  background_image!: string

  @BelongsToMany(() => Genres, () => GamesGenres)
  genres!: Genres[]

  // active!: boolean
}

// import { Entity, Column, BaseEntity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
// import { Genres } from './Genres';
// //* https://stackoverflow.com/questions/64635617/how-to-set-a-nullable-database-field-to-null-with-typeorm
// //! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
// @Entity()
// export class Videogames extends BaseEntity {
//   @PrimaryGeneratedColumn("uuid")
//   id!: string

//   @Column({ nullable: false })
//   name!: string

//   @Column()
//   description!: string

//   @Column()
//   released!: string

//   @Column({ type: 'float', nullable: false })
//   rating!: number

//   @Column({ type: 'simple-json', nullable: false })
//   // @Column({ type: 'jsonb' })
//   platforms!: string[]

//   @Column()
//   image!: string

//   // @ManyToMany(() => Genres) @JoinTable()
//   @ManyToMany(() => Genres, (genres) => genres.name) @JoinTable()
//   genres!: Genres[]

//   active!: boolean
// }