//Env Variables
require('dotenv').config();
import express from "express";
import config from 'config';
import router from "./router";
import db from '../config/db'
//Middlewares
import morganMiddleware from "./middleware/morganMiddleware";
//Logger
import Logger from "../config/logger";

const app = express();

//JSON middleware

app.use(express.json())

//Routes

//Middlewares
app.use(morganMiddleware)
app.use('/api/', router)


//APP Port

const port = config.get<number>('port')


app.listen(3000, async () => {

    await db();

    Logger.info(`Aplicação funcionando na porta: ${port}`)
})