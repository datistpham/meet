import express from "express"
import http from 'http'
import { Server } from "socket.io"
import cors from 'cors'
const app = express()
app.use(cors())
const server = http.createServer(app)
const io = new Server(server)
let users= ""
app.get("/t", (req, res)=> {
    console.log(req.query.a)
    users = req.query.a
    
    return res.send("hihihi")
    
})
io.of(`${users}`).on("connection", socket=> {
    socket.emit("hihi", socket.id)
    console.log(socket.id)
})

server.listen(5000)