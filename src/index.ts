import express from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import data_routes from "./router/data_routes"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express()
dotenv.config()

app.use(
  cors({
    credentials: true,
  })
)
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.use("/", data_routes())

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "http://192.168.29.152:3000",
    "",
    "http://127.0.0.1:5000",
  ]
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin)
  }
  next()
})

const mongo_uri =
  "mongodb+srv://amritraj:hX3ZQvqhd8sooUgw@cluster0.jkbshwf.mongodb.net/tableDb?retryWrites=true&w=majority&appName=Cluster0"
mongoose.Promise = Promise
mongoose.connect(mongo_uri)
mongoose.connection.on("error", (error: Error) => console.log(error))

const server = http.createServer(app)
const port = process.env.PORT || 5050
server.listen(port, () => {
  const address = server.address()
  console.log("Server running on " + String(port))
})
