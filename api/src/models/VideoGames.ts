import { Entity, Column, BaseEntity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Genres } from './Genres';
//* https://stackoverflow.com/questions/64635617/how-to-set-a-nullable-database-field-to-null-with-typeorm
//! IMPORTANTE, una ves creada la estructura de la tabla, REINICIAR TODO EL VISUAL, para que se efectuen los cambios
@Entity()
export class Videogames extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string

  @Column({ nullable: false })
  name!: string

  @Column()
  description!: string

  @Column()
  released!: string

  @Column({ type: 'float', nullable: false })
  rating!: number

  @Column({ type: 'jsonb', nullable: false })
  platforms!: string[]

  @Column()
  image!: string

  @ManyToMany(() => Genres) @JoinTable()
  genre!: Genres[]

  active!: boolean
}