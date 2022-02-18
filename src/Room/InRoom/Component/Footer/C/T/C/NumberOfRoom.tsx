import { memo, useContext, useEffect, useState } from "react"
import { ContextRoom } from "../../../../../../Index"
import { useParams } from "react-router-dom"
import { useStore } from "../../../../../../../zustand/store"
interface Number {
    key: string
    length: number
}
const NumberOfRoom= ()=> {
    const { socketRef }= useContext(ContextRoom)
    const { roomID }= useParams()
    const [number, setNumber]= useState<number>(()=> 1)
    const setnumberOfRooms= useStore(state=> state.setNumberOfRooms)
    const numberOfRooms= useStore(state=> state.numberOfRooms)

    useEffect(()=> {
        const myInterval= setInterval(()=> {
            socketRef.current.emit("get number users", { roomID })
            socketRef.current.on("number user from server", (data: Number)=> {
                if(number !== data.length) {
                    setNumber(()=> data.length)
                    
                }
                if(numberOfRooms !== data.length) {
                    setnumberOfRooms(()=> data.length)
                }
            })
        }, 1500)

        return ()=> clearInterval(myInterval)
    } , [roomID, socketRef, number, numberOfRooms, setnumberOfRooms])
    return (
        <div style={{position: 'absolute', top: 0, right: 0, width: 20, height: 20, borderRadius: '50%', backgroundColor: "#5f6368", color: "#fff", display: 'flex', justifyContent: 'center',alignItems: 'center', fontSize: 12, fontWeight: 600}}>
            {number}
        </div>
    )
}
export default memo(NumberOfRoom)