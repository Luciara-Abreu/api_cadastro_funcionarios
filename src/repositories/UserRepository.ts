import { AppDataSource } from '../data-source'
import User from '../entities/User'


const userRepository = AppDataSource.getRepository(User).extend({
  async findByName(nome: string): Promise<User | null> {
    const user = await this.findOneBy({ nome })
    return user
  },

  async findById(id_pessoa: string): Promise<User | null> {
    const user = await this.findOneBy({ id_pessoa })
    return user
  },

  async findByCPF(cpf: string): Promise<User | null> {
    const user = await this.findOneBy({ cpf })
    return user
  }
})

export default userRepository
