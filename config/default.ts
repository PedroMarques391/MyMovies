
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

export default {
    port: 3000,
    dbURL: `mongodb+srv://${dbUser}:${dbPassword}@clusterapi.rfbmoap.mongodb.net/?retryWrites=true&w=majority`,
    env: 'development',
};