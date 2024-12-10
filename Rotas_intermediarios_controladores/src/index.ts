import 'dotenv/config'
import express from 'express'
import { convidadoID, convidados, mensagemAPI } from './controladores'

const servidor = express()

servidor.get('/', mensagemAPI)

servidor.get('/convidados', convidados)

servidor.get('/convidados/:id', convidadoID)

servidor.listen(process.env.PORT)
