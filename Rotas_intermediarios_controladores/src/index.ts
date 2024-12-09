import 'dotenv/config'
import express from 'express'
import { mensagemAPI } from './controladores'

const servidor = express()

servidor.get('/', mensagemAPI)

servidor.listen(process.env.PORT)
