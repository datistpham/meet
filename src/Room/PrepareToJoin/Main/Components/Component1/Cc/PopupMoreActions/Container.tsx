import { useRef, useState, useEffect, createContext, useMemo } from "react"
import ClosePopup from "./C/ClosePopup"
import D from "./D/D"
import Case from "./S1/Case"
import { useStyles } from "./Styles/style"
import { Context } from "../../../../../../../docs/type/context_popup"

const initialContext: Context= {
    userVideo: "",
    camera: "",
    micro: "",
    turnoffCamera: null,
    turnoffMicro: null,
    turnonCamera: null,
    turnonMicro: null
}
interface StateContainer {
    stream1: any
}
const initialState: StateContainer= {
    stream1: null
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
    const [state, setState]= useState<StateContainer>(()=> initialState)
    useEffect(()=> {
        const getUser= async ()=> {
            try {
                const stream= await navigator.mediaDevices.getUserMedia({video: true, audio: true})
                setState(prev=> ({...prev, stream1: stream}))
                stream.getVideoTracks()[0].applyConstraints(constraints)
                userVideo.current.srcObject= stream
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    },[constraints])
    const turnoffCamera= (): void => {
        state.stream1.getVideoTracks().forEach((track: any)=> track.enabled= false)
    }
    const turnonCamera= (): void=> {
        state.stream1.getVideoTracks().forEach((track: any)=> track.enabled= true)
    }
    const turnoffMicro= (): void=> {
        state.stream1.getAudioTracks().forEach((track: any)=> track.enabled= false)

    }
    const turnonMicro= (): void=>{ 
        state.stream1.getAudioTracks().forEach((track: any)=> track.enabled= false)

    }

    return (
        <ContextPopup.Provider 
            value={{
                userVideo: userVideo,
                turnoffCamera: turnoffCamera,
                turnoffMicro: turnoffMicro,
                turnonCamera: turnonCamera,
                turnonMicro: turnonMicro
            }}
        >
            <div className={classes.container}>
                <div className={`_5600 ${classes.container2}`}>
                    <div className={classes.container3}>
                        <ClosePopup close={props.close} />
                        <D state1={props.state1} state2={props.state2} state3={props.state3} openState1={props.openState1} openState2={props.openState2} openState3={props.openState3} />
                        <Case state1={props.state1} state2={props.state2} state3={props.state3} openState1={props.openState1} openState2={props.openState2} openState3={props.openState3} />
                    </div>
                </div> 
            </div>
        </ContextPopup.Provider>
    )
}

export default Container