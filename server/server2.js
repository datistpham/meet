import express from "express"
import http from 'http'
import { Server } from "socket.io"
import cors from 'cors'
const app = express()
app.use(cors())
const server = http.createServer(app)
const io = new Server(server)

let list_room= []
const message= {}
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
   socket.on("send message", (data)=> {
      let username= data.username
      let timestamp= data.timestamp
      if(message[data.roomID]) {
         if(message[data.roomID].length>=1) {
            const lastMessage= message[data.roomID][message[data.roomID].length -1]
            if(lastMessage.tokenId=== data.tokenId && lastMessage.faketime=== data.faketime) {
               username= ""
               timestamp= ""
               socket.emit("message from server", {data: {text: data.text, username: username, timestamp: timestamp, tokenId: data.tokenId, faketime: data.faketime}})
            }
            else {
               socket.emit("message from server", { data: {text: data.text, username: data.username, timestamp: data.timestamp, tokenId: data.tokenId, faketime: data.faketime} })
            }
         }
      }
      else {
         socket.emit("message from server", {data: {text: data.text, username: username, timestamp: timestamp, tokenId: data.tokenId, faketime: data.faketime}})
      }
      if(message[data.roomID]) {
         message[data.roomID].push({text: data.text, username: username, timestamp: timestamp, tokenId: data.tokenId, faketime: data.faketime})
      }
      else {
         message[data.roomID]= [{text: data.text, username: username, timestamp: timestamp, tokenId: data.tokenId, faketime: data.faketime}]
      }
      socket.emit("update message", {data: {text: data.text, username: username, timestamp: timestamp, tokenId: data.tokenId, faketime: data.faketime }})
      socket.emit("all message" , {data: message[data.roomID]})
   })
   
})

server.listen(4000, ()=> console.log("server run on port 4000"))