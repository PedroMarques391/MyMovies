import mongoose from "mongoose";
import config from 'config';
import Logger from "./logger";

async function connect() {
    const dbURL = config.get<string>('dbURL');

    try {
        await mongoose.connect(dbURL);
        Logger.info('Conectou ao banco de dados!!')
    } catch (e) {
        Logger.error('Não foi possível conectar! :(');
        Logger.error(`Erro: ${e}`);
        process.exit(1)
        
    }
}
export default connect