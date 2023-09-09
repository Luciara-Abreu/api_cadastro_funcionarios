import express from "express"
import UserController from "../controller/UserController"
import { celebrate, Joi, Segments } from 'celebrate'


const RouteUser = express()
const userController = new UserController()

console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('------------------------------------------------------------')
console.log('********************** Rotas de User ***********************')

RouteUser.get('/users', userController.listAllUsers)

RouteUser.post(
  '/users',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string().required(),
      rg: Joi.string().required(),
      cpf: Joi.string().required(),
      data_nascimento: Joi.date().required(),
      data_admissao: Joi.date().required(),
      funcao: Joi.string(),
    },
  }),
  userController.createUser,
)

RouteUser.get(
  '/users/:id_pessoa',
  celebrate({
    [Segments.PARAMS]: {
      id_pessoa: Joi.string().required(),
    },
  }),
  userController.listOneUser,
)
RouteUser.patch(
  '/users/:id_pessoa',
  celebrate({
    [Segments.BODY]: {
      nome: Joi.string(),
      rg: Joi.string(),
      cpf: Joi.string(),
      data_nascimento: Joi.date(),
      data_admissao: Joi.date(),
      funcao: Joi.string(),
    },
    [Segments.PARAMS]: {
      id_pessoa: Joi.string().required(),
    },
  }),
  userController.updateUser,
)

RouteUser.delete(
  '/users/:id_pessoa',
  celebrate({
    [Segments.PARAMS]: {
      id_pessoa: Joi.string().required(),
    },
  }),
  userController.deleteUser,
)

console.log('')

export default RouteUser
