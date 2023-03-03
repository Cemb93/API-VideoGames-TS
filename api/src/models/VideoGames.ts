import { Entity, Column, BaseEntity, PrimaryColumn, ManyToMany, JoinTable } from 'typeorm';
import { Genres } from './Genres';

//* SE CREA LA TABLA
//! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
@Entity()
export class Videogames extends BaseEntity {
// export class Videogames {
  @PrimaryColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  description!: string

  @Column()
  released!: string

  @Column()
  rating!: string

  @Column()
  platforms!: string

  @Column()
  image!: string

  @ManyToMany(() => Genres)
  @JoinTable()
  genre!: Genres[]

  active!: boolean
}