import { NextFunction, Request, RequestParamHandler, Response } from "express"
import bancoDeDados from "../bancoDeDados"

export const verificaIdadeMaxima = (req: Request, res: Response, next: NextFunction) => {
    const { idadeMaxima } = req.query

    if(!idadeMaxima){
        next()
        return
    }

    const idade = parseInt(idadeMaxima as string, 10)

    if (isNaN(idade) || idade < 0) {
        res.send("Idade máxima inválida")
        return
    }

    next()
}