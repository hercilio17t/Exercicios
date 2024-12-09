import 'dotenv/config'
import express from 'express'
import { convidadoID, mensagemAPI } from './controladores'

const servidor = express()

servidor.get('/', mensagemAPI)

servidor.get('/convidados/:id', convidadoID)

servidor.listen(process.env.PORT)
