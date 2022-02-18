import express from "express"
import http from 'http'
import { Server } from "socket.io"
import cors from 'cors'
const app = express()
app.use(cors())
const server = http.createServer(app)
const io = new Server(server)

let list_room= []
io.on("connection", socket=> {
   socket.on("add-room", (data)=> {
      list_room.push(data.room)
      // console.log(list_room)
      // socket.emit("return list room", { list: list_room })
   })
   socket.on("check room", (data)=> {
      // console.log(data)
      // console.log(list_room)
      // console.log(list_room.indexOf(`${data.roomID}`))
      // console.log(list_room.includes(data.roomID.toString()))
      if(list_room.includes(data.roomID.toString())=== true) {
         socket.emit("check room done", { exist: true })
      }
      else {
         socket.emit("check room done", { exist: false })
      }
   })

})

server.listen(4000, ()=> console.log("server run on port 4000"))