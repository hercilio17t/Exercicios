import 'dotenv/config'
import express from 'express'
import { convidadoID, convidados, mensagemAPI} from './controladores'
import { verificaIdadeMaxima } from './intermediarios'

const servidor = express()

servidor.get('/', mensagemAPI)

servidor.get('/convidados', verificaIdadeMaxima ,convidados)

servidor.get('/convidados/:id', convidadoID)

servidor.listen(process.env.PORT)
