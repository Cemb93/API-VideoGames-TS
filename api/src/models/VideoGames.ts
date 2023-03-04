import { Entity, Column, BaseEntity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Genres } from './Genres';

//! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
@Entity()
export class Videogames extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

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

  @ManyToMany(() => Genres) @JoinTable()
  genre!: Genres[]

  active!: boolean
}