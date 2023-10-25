import { Router, Request, Response } from "express";
import { createMovie, deleteAllMovies, deleteMovie, findMovieById, getAllMovies, uptadeMovie } from "./controllers/movieControllers";
//Validations
import { validate } from "./middleware/handleValidation";
import { MovieCreateValidation } from "./middleware/movieValidation";

const router = Router();

export default router
.get('/test', (req: Request, res: Response) => {
    res.status(200).send('API Trabalhando!')
})
.post('/movie', MovieCreateValidation(), validate, createMovie)
.get('/movie/:id', findMovieById)
.get('/movie', getAllMovies)
.delete('/movie/:id', deleteMovie)
.delete('/movie', deleteAllMovies)
.patch('/movie/:id', MovieCreateValidation(), validate ,uptadeMovie)
