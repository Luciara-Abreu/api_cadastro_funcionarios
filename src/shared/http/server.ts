import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { errors } from 'celebrate'
import { pagination } from 'typeorm-pagination'
import cors from 'cors'
import RouteUser from '../../routes/UserRoute'
import AppError from '../errors/AppError'
import StartServer from '../..'


const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(pagination)
app.use(errors())
app.set('views enginie', 'ejs')
app.use(express.static(__dirname + '/API/src/images/'))

app.use(RouteUser)


//middleware
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.log(error)
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error 😭',
  })
})
const port = process.env.PORT_SERVER

app.listen(port, () => {
  console.log('')
  console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
  console.log(`✨ 🏆 Server started on port .............. 🏆 ${port} 🏆    ✨`)
  console.log('✨   --------------------------------------------------   ✨')
})

StartServer().then(app => {
  // Você pode acessar o objeto app do servidor Express aqui
  console.log(`✨      Database está rodando!                            ✨`)
}).catch(error => {
  console.error('Erro ao iniciar o servidor:', error);
});