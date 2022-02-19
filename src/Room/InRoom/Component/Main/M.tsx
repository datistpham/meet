import { lazy, Suspense } from "react"
import { useStyles } from "../../Style/main_style"
import Indentify from "./Indentify/Index"
import { useStore } from "../../../../zustand/store"
import VideoShare from "../Footer/C/S/C/Functionality/ShareScreen/VideoShare"
import Popup from "./H/Popup/Index"
const VideoSpecialIndex= lazy(()=> {
    return new Promise((resolve: any)=> {
        setTimeout(()=> resolve(import("./VideoSpecial/Index")), 500)
    })
})
const M= (props: any)=> {
    const sharing= useStore(state=> state.sharingScreen)
    const classes= useStyles()
    // const { idSelf, socketRef }= useContext(ContextRoom)
    // const { roomID }= useParams()

    // const cleanup = useCallback( ()=> {
    //     socketRef.current.emit("user-disconnect", {idSelf, roomID})
    // }, [socketRef, idSelf, roomID])
    // useEffect(()=> {
    //     return ()=> {
    //         cleanup()
    //     }
    // },[ idSelf, roomID, socketRef, cleanup])
    return (
        <div className={`_w0eiwsdt2 ${classes.mainIndex}`}>

            
            {
                sharing=== true &&
                <VideoShare myRef={props.refSharing} />  
            }
            <Suspense fallback={<div></div>}>
                <VideoSpecialIndex aff={props.aff} popup={props.popup} sharing={sharing} />
            </Suspense>
            {
                <Popup messageRoom={props.messageRoom} setMessageRoom={props.setMessageRoom} setPopupFalse={props.setPopupFalse} open={props.open} popup={props.popup} />
            }
            
            <Indentify />
        </div>
    )
}

export default M