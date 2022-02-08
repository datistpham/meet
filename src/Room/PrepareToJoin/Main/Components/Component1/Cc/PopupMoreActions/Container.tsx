import { useRef } from "react"
import { useEffect } from "react"
import ClosePopup from "./C/ClosePopup"
import D from "./D/D"
import Case from "./S1/Case"
import { useStyles } from "./Styles/style"
import { createContext } from "react"
import { useMemo } from "react"
interface Context {
    userVideo: any,
}
const initialContext: Context= {
    userVideo: "",    
}
export const ContextPopup= createContext(initialContext)
const Container= (props: any)=> {
    
    const classes= useStyles()
    const userVideo= useRef<any>()
    const constraints = useMemo(()=> ({
        width: {min: 640, ideal: 1280},
        height: {min: 480, ideal: 720},
        advanced: [
          {width: 1920, height: 1280},
          {aspectRatio: 1.777}
        ]
      }), [])
    useEffect(()=> {
        const getUser= async ()=> {
            try {
                const stream= await navigator.mediaDevices.getUserMedia({video: true, audio: true})
                stream.getVideoTracks()[0].applyConstraints(constraints)
                userVideo.current.srcObject= stream
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    },[constraints])

    return (
        <ContextPopup.Provider value={{userVideo: userVideo}}>
            <div className={classes.container}>
                <div className={`_5600 ${classes.container2}`}>
                    <div className={classes.container3}>
                        <ClosePopup close={props.close} />
                        <D state1={props.state1} state2={props.state2} state3={props.state3} openState1={props.openState1} openState2={props.openState2} openState3={props.openState3} />
                        <Case />
                    </div>
                </div> 
            </div>
        </ContextPopup.Provider>
    )
}

export default Container