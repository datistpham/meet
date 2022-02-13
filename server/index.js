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
const usersInfo= {}
const numberOfUserRooms= {}
const allListUser= {}
io.on('connection', socket => {
    socket.on("join room", roomID => {
        // console.log(users[roomID])
        if (users[roomID]) {
            const length = users[roomID].length
            if (length === 50) {
                socket.emit("room full")
                return
            }
            users[roomID].push(socket.id)
        } else {
            users[roomID] = [socket.id]
        }
        socketToRoom[socket.id] = roomID
        const usersInThisRoom = users[roomID].filter(id => id !== socket.id)
        // console.log(usersInThisRoom)
        socket.emit("all users", usersInThisRoom)
    })
    socket.on("user", data=> {
        if (usersInfo[data.roomID]) {
            const length = usersInfo[data.roomID].length
            if (length === 50) {
                socket.emit("room full")
                return
            }
            usersInfo[data.roomID].push({socketId: socket.id, photoUrl: data.photoUrl, userName: data.username})
        } else {
            usersInfo[data.roomID] = [{socketId: socket.id, photoUrl: data.photoUrl, userName: data.username}]
        }
        io.to(socket.id).emit("self", {socketId: socket.id, photoUrl: data.photoUrl, userName: data.username})
        const userInThisRoomInfo= usersInfo[data.roomID]
        // console.log(userInThisRoomInfo)
        socket.emit("all-list-user", {allListUser: userInThisRoomInfo})
        socket.emit("count-room-user", {countUser: userInThisRoomInfo.length})
    })

    socket.on("counter-room-user-server", data=> {
        numberOfUserRooms[data.roomID]= data.numberOfuser
    })

    socket.on("all-list-user-server", data=> {
        allListUser[data.roomID]= data["allListUserS"]
        // console.log((allListUser))
    })

    socket.on("sending signal", payload => {
        io.to(payload.userToSignal).emit('user joined', { signal: payload.signal, callerID: payload.callerID })
    })

    socket.on("returning signal", payload => {
        io.to(payload.callerID).emit('receiving returned signal', { signal: payload.signal, id: socket.id })
    })
    socket.on("user-joining-client", (data)=> {
        const uRoom= data.roomID
        socket.emit("user-joining-server", {allList: allListUser[`${uRoom}`]})
    })
    
    socket.on("user-disconnect", (data)=> {
        if(allListUser[data.roomID] !== undefined) {
            const allListUserUpdate= allListUser[data.roomID].filter(item=> item.socketId != data.idSelf)
            allListUser[data.roomID]= allListUserUpdate
        }
        // console.log(data.idSelf)
        // console.log(allListUser[data.roomID])
    })
    socket.on('disconnect', () => {
        const roomID = socketToRoom[socket.id]
        let room = users[roomID]
        // console.log(socket.id)
        // Object.values(allListUser).map(item=> item.filter(item2=> console.log(item2.socketId)))
        // console.log(Object.values(allListUser))
        if (room) {
            room = room.filter(id => id !== socket.id)
            users[roomID] = room
        }
    })
})

server.listen(process.env.PORT || 8000, () => console.log('server is running on port 8000'))