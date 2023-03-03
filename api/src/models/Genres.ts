import { Entity, Column, BaseEntity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Videogames } from './VideoGames';

//* SE CREA LA TABLA
//! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
@Entity()
// export class Genres extends BaseEntity {
export class Genres {
  @PrimaryColumn()
  id!: number

  @Column()
  name!: string

  @ManyToMany(() => Videogames)
  @JoinTable()
  videogames!: Videogames[]

  active!: boolean
}