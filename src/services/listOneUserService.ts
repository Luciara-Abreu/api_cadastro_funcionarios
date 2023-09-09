import User from "../entities/User"
import userRepository from "../repositories/UserRepository"
import AppError from "../shared/errors/AppError"

interface IRequest {
  id_pessoa: string
}
class ListOneUserService {
  public async execute({ id_pessoa }: IRequest): Promise<User> {
    const user = await userRepository.findOneBy({ id_pessoa })

    if (!user) {
      throw new AppError('user not found 👻')
    } else {
      console.log(user)
    }
    return user
  }
}

export default ListOneUserService
