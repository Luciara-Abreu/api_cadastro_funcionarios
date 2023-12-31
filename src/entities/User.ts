import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('pessoas')
class User {
  @PrimaryGeneratedColumn()
  id_pessoa: string

  @Column({ type: 'text' })
  nome: string

  @Column({ type: 'text' })
  rg: string

  @Column({ type: 'text' })
  cpf: string

  @Column({ type: 'date' })
  data_nascimento: Date

  @Column({ type: 'date' })
  data_admissao: Date

  @Column({ type: 'text' })
  funcao: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}
export default User

