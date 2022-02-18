import { useRef, useState, lazy, useEffect, Suspense, createContext, useContext, useMemo, useCallback } from "react"
import { useParams } from "react-router-dom"
// import { Video } from "../../Index"
// import { io } from "socket.io-client"
import {  InRoom } from "../Index"
import Peer from 'simple-peer'
import { useStyles } from "../Style/main_style"
import FooterIndex from "./Footer/Index"
import tingting from "../../../Assert/sound_just_join_room.mp3"
import { ContextTType } from "../../../docs/type/contextTtype"
import { ContextRoom } from "../../Index"
import { useStore } from "../../../zustand/store"
import { ShareScreen } from "../../../docs/f/ShareScreen"
import { OpenType } from "../../../docs/type/opentype"
import Invitation from "./Main/H/Invitation/Invitation"

// const H = lazy(() => {
//     return new Promise((resolve: any) => {
//       setTimeout(() => resolve(import("./Main/H/H")), 5000);
//     });
//   });
const M= lazy(()=> {
    return new Promise((resolve: any)=> {
        setTimeout(()=> resolve(import("./Main/M")))
    })
})
const initialContext: ContextTType= {
    peers: null,
    myRef: null,
    turnOffCamera: null,
    turnOnCamera: null,
    turnOffMicro: null,
    turnOnMicro: null,
    stream1: null,
    turnOffShare: null,
    turnOnShare: null,
    refSharing: null
}
export const ContextT= createContext(initialContext)
const Tingting= ()=> {
    return (
        <audio autoPlay>
            <source src={tingting} type="audio/mpeg" /> 
        </audio>
    )
}
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))
const T= ()=> {
    
    const classes= useStyles()
    const sharingFalse= useStore(state=> state.sharingScreenTrue)
    const sharingFalseReal= useStore(state=> state.sharingScreenFalse)
    const peersRef= useRef<any>([])
    const myRef= useRef<any>(null)
    const myRefJSX= useRef<any>(null)
    const [peers, setPeers]= useState<any>([])
    const [stream1, setStream1]= useState<any>(()=> null)
    const [popup, setPopup]= useState<boolean>(()=> false)
    const [boxInvite, setBoxInvite]= useState<boolean>(()=> true)
    const closeBoxInvite= ()=> {
        setBoxInvite(()=> false)
    }
    const setPopupTrue= ()=> {
        setPopup((prev: any)=> true)
    }
    const setPopupFalse= ()=> {
        setPopup((prev: any)=> false)
    }
    // const isSharing= useStore(state=> state.sharingScreenTrue)
    const refSharing= useRef<any>(null)
    
    // const [s, setS]= useState<any>(()=> ({
    //     audioStream: null, 
    //     frequencyArray: []
    // }))
    
    const { socketRef, bossRoom }= useContext(ContextRoom)
    const constraints = useMemo(()=> ({
        width: {min: 640, ideal: 1280},
        height: {min: 480, ideal: 720},
        advanced: [
          {width: 1920, height: 1280},
          {aspectRatio: 1.777}
        ]
    }), [])
    const createPeer= useCallback(((userToSignal: any, callerID: any, stream: any)=> {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });
        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })
        return peer;
    }), [socketRef])
    const addPeer= useCallback( ((incomingSignal: any, callerID: any, stream: any)=>  {
        const peer = new Peer({
            initiator: false,
            trickle: false,
            stream,
        })
        peer.on("signal", signal => {
            socketRef.current.emit("returning signal", { signal, callerID })
        })
        peer.signal(incomingSignal)
        return peer
    }), [socketRef])
    const { roomID }= useParams()
    useEffect(()=> {
        (async()=> {
            try {
                const stream= await navigator.mediaDevices.getUserMedia({video: true, audio: true})
                setStream1(()=> stream)
                await stream.getVideoTracks()[0].applyConstraints(constraints)
                await sleep(1000)
                myRef.current.srcObject= stream
                socketRef!.current.emit("join room", roomID)
                socketRef!.current.on("all users", (users: any)=> {
                    const peers: any= []
                    users.forEach((userID: any)=> {
                        const peer= createPeer(userID, socketRef.current.id, stream)
                        peersRef.current.push({
                            peerID: userID,
                            peer
                        })
                        peers.push(peer)
                    })
                    setPeers(peers)
                })
                socketRef.current.on("user joined", (payload: any)=> {
                    const peer= addPeer(payload.signal, payload.callerID, stream)
                    peersRef.current.push({
                        peerID: payload.callerID,
                        peer
                    })
                    setPeers((users: any)=> [...users, peer])
                })
                socketRef.current.on("receiving returned signal", (payload: any)=> {
                    const item= peersRef.current.find((p: any)=> p.peerID=== payload.id)
                    item.peer.signal(payload.signal)
                })
            }catch (err) {
                console.log(err)
            }
        })()
    },[roomID, constraints, addPeer, createPeer, socketRef ])



    const turnOffCamera= async ()=> {
        await stream1.getVideoTracks().forEach((track: any) => track.enabled = false)
    }
    const turnOnCamera= async ()=> {
        await stream1.getVideoTracks().forEach((track: any) => track.enabled = true)
    }
    const turnOffMicro= async ()=> {
        stream1.getAudioTracks()[0].enabled= false
    }
    const turnOnMicro= async ()=> {
        stream1.getAudioTracks()[0].enabled= true
    }
    const turnOffShare= async ()=> {
        refSharing.current.srcObject.getVideoTracks()[0].enabled= false
        sharingFalse()
    }
    const turnOnShare= async ()=> {
        refSharing.current.srcObject.getVideoTracks()[0].enabled= true
        sharingFalse()
    }
    const [fullScreening, setFullScreening ]= useState<boolean>(()=> false)
    const handleFullScreen= ()=> {
        const elem= document.body
        if(elem.requestFullscreen) {
            elem.requestFullscreen()
            setFullScreening(()=> true)
        }
    }

    const handleExitFullScreen= ()=> {
        if(document.exitFullscreen) {
            document.exitFullscreen()
            setFullScreening(()=> false)
        }
    }

    useEffect(()=> {
        document.addEventListener("dblclick", fullScreening=== false ? handleFullScreen : handleExitFullScreen)
        return ()=> document.removeEventListener("dblclick",fullScreening=== false ? handleFullScreen : handleExitFullScreen)
    })

    const [open, setOpen]= useState<OpenType>(()=> ({p1: false, p2: false, p3: false, p4: false, p5: false}))
    const p1Open= ()=> {
        setOpen(prev=> ({...prev, p1: true, p2: false, p3: false, p4: false, p5: false}))
    }
    const p2Open= ()=> {
        setOpen(prev=> ({...prev, p2: true, p1: false, p3: false, p4: false, p5: false}))
    }
    const p3Open= ()=> {
        setOpen(prev=> ({...prev, p3: true, p1: false, p2: false, p4: false, p5: false}))
    }
    const p4Open= ()=> {
        setOpen(prev=> ({...prev, p4: true, p1: false, p2: false, p3: false, p5: false}))
    }
    const p5Open= ()=> {
        setOpen(prev=> ({...prev, p5: true, p1: false, p2: false, p3: false, p4: false}) )
    }
    return (
        <ContextT.Provider value={{
            peers: peers, 
            myRef: myRef,
            turnOffCamera: turnOffCamera,
            turnOnCamera: turnOnCamera,
            turnOffMicro: turnOffMicro,
            turnOnMicro: turnOnMicro,
            stream1: stream1,
            turnOffShare: turnOffShare,
            turnOnShare: turnOnShare,
            refSharing: refSharing
        }}>
            <InRoom>
                <div ref={myRefJSX} className={`${classes.indexRoot} _3023`}>
                    <Tingting />
                        <Suspense fallback={<div></div>}>
                            <M setPopupFalse={setPopupFalse} refSharing={refSharing} popup={popup} open={open} />
                        </Suspense>
                        {
                            (bossRoom !== "member" && boxInvite=== true )&&
                            <Invitation closeBoxInvite={closeBoxInvite} />
                        }
                        {/* <Suspense fallback={<div></div>}>
                            <H />
                        </Suspense> */}
                    <FooterIndex open={open} p1Open={p1Open} p2Open={p2Open} p3Open={p3Open} p4Open={p4Open} p5Open={p5Open} setPopuptrue={setPopupTrue} fullScreening={fullScreening} setFullScreening={setFullScreening} handleFullScreen={handleFullScreen} handleExitFullScreen={handleExitFullScreen} isSharing={()=> ShareScreen(refSharing, sharingFalseReal)} />
                </div>
            </InRoom>
        </ContextT.Provider>
    )
}

export default T