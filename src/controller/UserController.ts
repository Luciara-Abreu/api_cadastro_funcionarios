import { Request, Response } from 'express'
import CreateUserService from '../services/createUserService'
import ListOneUserService from '../services/listOneUserService'
import ListAllUserService from '../services/listAllUserService'
import UpdateUserService from '../services/UpdateUserService'
import DeleteUserService from '../services/deleteUserServer'


class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const { nome, rg, cpf, data_nascimento, data_admissao, funcao } = req.body
    const addneWUser = new CreateUserService()
    const thisUser = await addneWUser.execute({
      nome,
      rg,
      cpf,
      data_nascimento,
      data_admissao,
      funcao  
    })
    return res.json(thisUser)
  }

  public async listOneUser(req: Request, res: Response): Promise<Response> {
    const { id_pessoa } = req.params
    const showUser = new ListOneUserService()
    const thisUser = await showUser.execute({ id_pessoa })
    return res.json(thisUser)
  }

  async listAllUsers(req: Request, res: Response) {
    const listUsers = new ListAllUserService()
    const showUsers = await listUsers.execute()
    return res.json(showUsers)
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    const {nome, rg, cpf, data_nascimento, data_admissao, funcao } = req.body
    const { id_pessoa } = req.params

    const userForUpdate = new UpdateUserService()
    const thisUser = await userForUpdate.execute({
      id_pessoa,
      nome,
      rg,
      cpf,
      data_nascimento,
      data_admissao,
      funcao  
    })
    return res.json(thisUser)
  }

  public async deleteUser(request: Request, response: Response): Promise<Response> {
    const { id_pessoa } = request.params

    const deleteUSer = new DeleteUserService()
    await deleteUSer.execute({ id_pessoa })
    return response.json([])
  }
}
export default UserController
