import { Request, RequestParamHandler, Response } from "express"
import bancoDeDados from "../bancoDeDados"


export const mensagemAPI = (req: Request, res: Response) => {
    res.send("API de lista de convidados")
}

export const convidados = (req: Request, res: Response) => {
    res.send(bancoDeDados)
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
