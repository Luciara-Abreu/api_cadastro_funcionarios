import User from "../entities/User"
import IUserType from "../interfaces/IUser"
import userRepository from "../repositories/UserRepository"
import AppError from "../shared/errors/AppError"


class UpdateUserService {
  public async execute({ id_pessoa, nome, rg, cpf, data_nascimento, data_admissao, funcao}: IUserType): Promise<User | undefined> {
    const user = await userRepository.findOneBy({ id_pessoa })

    if (user) {
      user.nome = nome
      user.rg =rg
      user.cpf = cpf
      user.data_nascimento = data_nascimento
      user.data_admissao = data_admissao 
      user.funcao = funcao    


      await userRepository.save(user)
      console.log(`User atualizado com sucesso!`)
    } else {
      throw new AppError('user not found 👻')
    }

    return user
  }
}

export default UpdateUserService

