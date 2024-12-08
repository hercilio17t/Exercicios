import express, { Request, Response } from "express"
import 'dotenv/config'

const servidor = express()

servidor.get('/somar', function somar(req: Request, res: Response) {
    const num1: number = Number(process.env.NUM_1)
    const num2: number = Number(process.env.NUM_2)
    const soma = num1 + num2
    res.send(`Resultado da soma: ${soma}`)
})

servidor.get('/subtrair', function subtrair(req: Request, res: Response) {
    const num1: number = Number(process.env.NUM_1)
    const num2: number = Number(process.env.NUM_2)
    const subtracao = num1 - num2
    res.send(`Resultado da subtração: ${subtracao}`)
})

servidor.get('/multiplicar', function multiplicar(req: Request, res: Response) {
    const num1: number = Number(process.env.NUM_1)
    const num2: number = Number(process.env.NUM_2)
    const multiplicacao = num1 * num2
    res.send(`Resultado da multiplicação: ${multiplicacao}`)
})

servidor.get('/dividir', function dividir(req: Request, res: Response) {
    const num1: number = Number(process.env.NUM_1)
    const num2: number = Number(process.env.NUM_2)
    const divisao = num1 / num2
    res.send(`Resultado da divisão: ${divisao}`)
})

const PORT = process.env.PORT || 3000

servidor.listen(PORT, () => {
    console.log(`SERVIDOR RODANDO NA PORTA ${PORT}`)
})
