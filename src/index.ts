import express from "express"
import dot from "dotenv"
import { usuarioRoutes } from "./routes/index.ts"

dot.config({path: "/home/taller4O/usuario/src/.env"})

const app = express()
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send('Usuario Activo')
  })

app.use("/usuario", usuarioRoutes)
  
app.listen(port, () => {
    console.log("Microservicio usuarios activo, puerto", port);
});