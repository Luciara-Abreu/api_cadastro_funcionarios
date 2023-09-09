import userRepository from "../repositories/UserRepository"
import AppError from "../shared/errors/AppError"

interface IRequest {
  id_pessoa: string
}
class DeleteUserService {
  public async execute({ id_pessoa }: IRequest): Promise<void> {
    const user = await userRepository.findOneBy({ id_pessoa })
    if (user) {
      await userRepository.remove(user)
      console.log(`User ${user.nome} do ${user.id_pessoa}, deletado com sucesso!`)
    } else {
      throw new AppError('user not found 👻')
    }
  }
}

export default DeleteUserService
