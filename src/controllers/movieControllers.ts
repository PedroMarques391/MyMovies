import { Request, Response } from "express";
//Model
import { MovieModel } from "../models/Movie";
//Logger
import Logger from "../../config/logger";

//Cadastrando Fillmes
export async function createMovie(req: Request, res: Response) {
    try {
        const data = req.body;
        const movie = await MovieModel.create(data);
        return res.status(201).json(movie)
    }catch(e: any) {
        Logger.error(`System error: ${e.message}`)
        return res.status(500).json({Error: 'Por favor, tente mais tarde.'})
    }
}

//Procurando filmes através do ID
export async function findMovieById(req: Request, res: Response) {
   
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id)

        if(!movie) {
            return res.status(404).json({404: "Film not Found."})
        }

        return res.status(200).json(movie)

    }catch(e: any) {
        Logger.error(`System error: ${e.message}`)
        return res.status(500).json({Error: 'Por favor, tente mais tarde.'})
    }
}

//Listando todos os filmes

export async function getAllMovies(req: Request, res: Response) {
    try {

        const movies = await MovieModel.find()
        return res.status(200).json(movies)

    }catch(e: any) {
        Logger.error(`System error: ${e.message}`)
        return res.status(500).json({Error: 'Por favor, tente mais tarde.'})
    }
}

//Remover filmes da lista

export async function deleteMovie(req: Request, res: Response) {
    try {
        
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: 'O filme não existe.'})
        }

        await movie.deleteOne()

        return res.status(200).json({success: 'Filme deletado com sucesso!'})

    }catch (e: any) {
        Logger.error(`System error: ${e.message}`)
        return res.status(500).json({Error: 'Por favor, tente mais tarde.'})
    }
}

//Remover todos os filmes da lista

export async function deleteAllMovies(req: Request, res: Response) {
    try {

        const movie = await MovieModel.deleteMany()
        return res.status(200).json({Success: 'Filmes deletados com sucesso!'})

    }catch(e: any) {
        Logger.error(`System error: ${e.message}`)
        return res.status(500).json({Error: 'Erro ao excluír, tente mais tarde.'})
    }
}


//Editar filmes cadastrados

export async function uptadeMovie(req: Request, res: Response) {
    try {

        const id = req.params.id;
        const data = req.body;
        const movie = await MovieModel.findById(id);

        if(!movie) {
            return res.status(404).json({error: 'O filme não existe.'})
        }

        await MovieModel.updateOne({_id: id}, data);
        return res.status(200).json(data)

    } catch(e: any) {
        Logger.error(`System error: ${e.message}`)
        return res.status(500).json({Error: 'Por favor, tente mais tarde.'})
    }
}