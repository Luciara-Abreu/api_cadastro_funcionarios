import User from "../entities/User"
import IUserType from "../interfaces/IUser"
import userRepository from "../repositories/UserRepository"
import AppError from "../shared/errors/AppError"


class CreateUserService {
  public async execute({ id_pessoa, nome, rg, cpf, data_nascimento, data_admissao, funcao }: IUserType): Promise<User> {
    const cpfExist = await userRepository.findByCPF(cpf)
    if (cpfExist) {
      throw new AppError('employee alread registered 🤪')
    }
    const nameExist = await userRepository.findByName(nome)
    if (nameExist) {
      throw new AppError('User alread exist with this data 🤪')
    }
    const salveUser = userRepository.create({
      nome,
      rg,
      cpf,
      data_nascimento,
      data_admissao,
      funcao  
    })

    await userRepository.save(salveUser)
    return salveUser
  }
}

export default CreateUserService
