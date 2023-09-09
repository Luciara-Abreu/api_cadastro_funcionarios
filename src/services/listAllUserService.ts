import User from "../entities/User"
import userRepository from "../repositories/UserRepository"

class ListAllUserService {
  public async execute(): Promise<User[]> {
    const userRepo = userRepository
    const users = await userRepo.find()
    //const users = await userRepo.createQueryBuilder('user').take(10).getMany()
    return users
  }
}

export default ListAllUserService
