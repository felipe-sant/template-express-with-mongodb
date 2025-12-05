import mongoose from "mongoose"
import app from "./app"
import dotenv from "dotenv"

dotenv.config()

const mongouri = process.env.MONGOURI
const port = 3001

mongoose.connect(mongouri as string)
    .then(() => console.log("✅ | Conectado ao banco de dados"))
    .catch((err) => console.log("❌ | Erro ao conectar ao banco de dados: ", err))

app.listen(port, '0.0.0.0', () => {
    console.log(`✅ | Servidor rodando na porta http://0.0.0.0:${port}`)
}).on('error', (err) => {
    console.log("❌ | Erro ao iniciar o servidor: ", err)
})