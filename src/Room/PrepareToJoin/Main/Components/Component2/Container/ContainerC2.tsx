import { useContext, useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContextRoom } from "../../../../../Index"
import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import ContainerC21 from "./ContainerC2_1/ContainerC21"
import ContainerC22 from "./ContainerC2_2/ContainerC22"

const ContainerC2= (props: any)=> {
    const classes= useStyles()
    const { socketRef, userList }= useContext(ContextRoom)
    const { roomID }= useParams()
    const [allUserA, setAllUserA]= useState<Array<any>>(()=> ([]) )
    // const setListUser= ()=> {
        
    // }
    useEffect(()=> {
        socketRef.current.emit("user-joining-client", { roomID })
        socketRef.current.on("user-joining-server",(data: any)=> {
            setAllUserA(()=> data["allList"])
        })
    },[roomID, socketRef, userList])
    return (
        <div className={`_6400 shTJQe ${classes.containerC2}`}>
            <ContainerC21 allUserA={allUserA} />
            <ContainerC22 />
        </div>
    )
}

export default ContainerC2