import express from "express"
import http from 'http'
import { Server } from "socket.io"
import cors from 'cors'
import _ from "lodash"
const app = express()
app.use(cors())
const server = http.createServer(app)
const io = new Server(server)

// let listRoom= []
const socketToRoom = {}
const users = {}
const usersInfo= {}
const numberOfUserRooms= {}
const allListUser= {}
io.on('connection', socket => {
    // console.log(socket.id)
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
        socket.emit("number of users", usersInThisRoom.length)
        socket.emit("all users", usersInThisRoom)
    })
    socket.on("get number users", (data)=> {
        const usersInThisRoom= users[data.roomID]
        // console.log(usersInThisRoom)
        if(usersInThisRoom.length !== undefined) {
            socket.emit("number user from server", { length: usersInThisRoom.length || 1})
        }

    })

    socket.on("user", data=> {
        if (usersInfo[data.roomID]) {
            const length = usersInfo[data.roomID].length
            if (length === 50) {
                socket.emit("room full")
                return
            }
            usersInfo[data.roomID].push({socketId: socket.id, photoUrl: data.photoUrl, userName: data.username, position: data.bossRoom})
        } else {
            usersInfo[data.roomID] = [{socketId: socket.id, photoUrl: data.photoUrl, userName: data.username, position: data.bossRoom}]
        }
        io.to(socket.id).emit("self", {socketId: socket.id, photoUrl: data.photoUrl, userName: data.username, position: data.bossRoom})
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
    
    // socket.on("user-disconnect", (data)=> {
    //     console.log(111)
    //     console.log(allListUser)
    //     if(allListUser[data.roomID] !== undefined) {
    //         const allListUserUpdate= allListUser[data.roomID].filter(item=> item.socketId.toString() !== socket.id.toString())
    //         allListUser[data.roomID]= allListUserUpdate
    //     }
    //     // console.log(data.idSelf)
    //     // console.log(allListUser[data.roomID])
    // })
    // 
    
    // 
    socket.on("list user from client", (data)=> {
        socket.emit("list user from server", { list: allListUser[data.roomID] })
    })
    socket.on('disconnect', () => {
        // console.log(socket.id)
        // console.log(allListUser)

        
        // console.log(Object.values(allListUser))
        const roomID = socketToRoom[socket.id]
        // console.log(roomID)
        // allListUser[roomID]
        _.remove(allListUser[roomID], obj=> obj.socketId.toString() === socket.id.toString())
        // console.log(allListUser[roomID])
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