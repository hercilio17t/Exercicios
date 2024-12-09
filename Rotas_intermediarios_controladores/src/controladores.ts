import { Request, Response } from "express";


export const mensagemAPI = (req: Request, res: Response) => {
    res.send("API de lista de convidados")
}