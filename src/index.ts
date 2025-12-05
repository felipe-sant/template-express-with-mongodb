import app from "./app"
import dotenv from "dotenv"

dotenv.config()

const mongouri = process.env.MONGOURI
const port = 3001

app.listen(port, '0.0.0.0', () => {
    console.log(`✅ | Servidor rodando na porta http://0.0.0.0:${port}`)
    console.log(`✅ | Conectando ao banco de dados em ${mongouri}`)
})