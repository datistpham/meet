import express from "express"
import http from 'http'
import { Server } from "socket.io"
import cors from 'cors'
const app = express()
app.use(cors())
const server = http.createServer(app)
const io = new Server(server)

const socketToRoom = {}
const users = {}
io.on('connection', socket => {
    socket.on("join room", roomID => {
        // console.log(users[roomID])
        if (users[roomID]) {
            const length = users[roomID].length
            if (length === 4) {
                socket.emit("room full")
                return
            }
            users[roomID].push(socket.id)
        } else {
            users[roomID] = [socket.id]
        }
        socketToRoom[socket.id] = roomID
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id)
        socket.emit("all users", usersInThisRoom)
    })

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID })
    })

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id })
    })

    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id]
        let room = users[roomID]
        if (room) {
            room = room.filter(id => id !== socket.id)
            users[roomID] = room
        }
    })

})

server.listen(process.env.PORT || 8000, () => console.log('server is running on port 8000'))