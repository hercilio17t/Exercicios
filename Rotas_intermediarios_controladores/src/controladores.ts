import { NextFunction, Request, RequestParamHandler, Response } from "express"
import bancoDeDados from "../bancoDeDados"


export const mensagemAPI = (req: Request, res: Response) => {
    res.send("API de lista de convidados")
}

export const convidados = (req: Request, res: Response) => {
    const { idadeMaxima } = req.query

    if(!idadeMaxima){
        res.send(bancoDeDados)
        return
    }

    const idade = parseInt(idadeMaxima as string, 10)

    const convidadosFiltrados = bancoDeDados.filter(convidado => convidado.idade <= idade)

    res.send(convidadosFiltrados)
}

export const convidadoID = (req: Request, res: Response) => {
    const { id } = req.params
    const IDConvidado = parseInt(id, 10)

    const convidado = bancoDeDados.find(c => c.id === IDConvidado)

    if(convidado){
        res.send(convidado)
    }
    else{
        res.send("Convidado não encontrado")
    }
}

