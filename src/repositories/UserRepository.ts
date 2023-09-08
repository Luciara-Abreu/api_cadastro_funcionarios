

import { AppDataSource } from '../data-source'
import Pessoa from '../entities/Pessoa'

const userRepository = AppDataSource.getRepository(Pessoa).extend({
  async findByName(name: string): Promise<Pessoa | null> {
    const user = await this.findOneBy({ name  })
    return user
  },

  async findById(id: string): Promise<Pessoa | null> {
    const user = await this.findOneBy({ id})
    return user
  } 
})

export default userRepository
