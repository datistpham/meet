import { useContext } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ContextRoom } from "../../../../../Index"
import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import ContainerC21 from "./ContainerC2_1/ContainerC21"
import ContainerC22 from "./ContainerC2_2/ContainerC22"
const ContainerC2= (props: any)=> {
    const classes= useStyles()
    const { socketRef }= useContext(ContextRoom)
    const { roomID }= useParams()
    // const setListUser= ()=> {
        
    // }
    useEffect(()=> {
        socketRef.current.emit("user-joining-client", { roomID })
        socketRef.current.on("user-joining-server",(data: any)=> {
            console.log(data)
        })
    })
    return (
        <div className={`_6400 ${classes.containerC2}`}>
            <ContainerC21 />
            <ContainerC22 />
        </div>
    )
}

export default ContainerC2