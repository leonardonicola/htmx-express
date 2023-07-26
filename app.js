import express from "express"
import cors from "cors"
import router from "./routes/index.js"
import dotenv from "dotenv"
import server from "./server/index.js"
const app = express()

//Environment variables
dotenv.config()
const port = process.env.PORT

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.listen(port, () => {
  console.log(`Backend at port: http://localhost:${port}/`)
})

server.listen(5000, () => {
  console.log(`Frontend at: http://localhost:5000/`)
})
