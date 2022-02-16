import { useRef, useState, lazy, useEffect, Suspense, createContext } from "react"
import { useParams } from "react-router-dom"
// import { Video } from "../../Index"
import { io } from "socket.io-client"
import {  InRoom } from "../Index"
import Peer from 'simple-peer'
import { useStyles } from "../Style/main_style"
import FooterIndex from "./Footer/Index"
import tingting from "../../../Assert/sound_just_join_room.mp3"
import { ContextTType } from "../../../docs/type/contextTtype"
// import { useContext } from "react"
// import { ContextRoom } from "../../Index"
import M from "./Main/M"
import { useMemo } from "react"
import { useStore } from "../../../zustand/store"
import { ShareScreen } from "../../../docs/f/ShareScreen"
const H = lazy(() => {
    return new Promise((resolve: any) => {
      setTimeout(() => resolve(import("./Main/H/H")), 5000);
    });
  });
  
const initialContext: ContextTType= {
    peers: null,
    myRef: null,
    turnOffCamera: null,
    turnOnCamera: null,
    turnOffMicro: null,
    turnOnMicro: null,
    stream1: null,
}
export const ContextT= createContext(initialContext)
const Tingting= ()=> {
    return (
        <audio autoPlay>
            <source src={tingting} type="audio/mpeg" /> 
        </audio>
    )
}
const T= ()=> {
    const classes= useStyles()
    const peersRef= useRef<any>([])
    const myRef= useRef<any>(null)
    const myRefJSX= useRef<any>(null)
    const socketRef= useRef<any>(null)
    const [peers, setPeers]= useState<any>([])
    const [stream1, setStream1]= useState<any>(()=> null)
    // const isSharing= useStore(state=> state.sharingScreenTrue)
    const refSharing= useRef<any>(null)
    
    // const [s, setS]= useState<any>(()=> ({
    //     audioStream: null, 
    //     frequencyArray: []
    // }))
    
    // const { idSelf }= useContext(ContextRoom)
    const constraints = useMemo(()=> ({
        width: {min: 640, ideal: 1280},
        height: {min: 480, ideal: 720},
        advanced: [
          {width: 1920, height: 1280},
          {aspectRatio: 1.777}
        ]
    }), [])

    const { roomID }= useParams()
    useEffect(()=> {
        (async()=> {
            try {
                socketRef.current= io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
                const stream= await navigator.mediaDevices.getUserMedia({video: true, audio: true})
                setStream1(()=> stream)
                await stream.getVideoTracks()[0].applyConstraints(constraints)
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
    },[roomID, constraints ])
    
    function createPeer(userToSignal: any, callerID: any, stream: any) {
        const peer = new Peer({
            initiator: true,
            trickle: false,
            stream,
        });
        peer.on("signal", signal => {
            socketRef.current.emit("sending signal", { userToSignal, callerID, signal })
        })
        return peer;
    }
    function addPeer(incomingSignal: any, callerID: any, stream: any) {
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
    }
    const toggleFullScreen= ()=> {
        if(myRefJSX.current.requestFullscreen) {
            myRefJSX.current.requestFullscreen()
        }
        else if(myRefJSX.current.exitFullscreen) {
            myRefJSX.current.exitFullscreen()
        }
    }
    useEffect(()=> {
        document.addEventListener("dblclick", toggleFullScreen)
        return ()=> document.removeEventListener("dblclick", toggleFullScreen)
    })
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
    
    
    return (
        <ContextT.Provider value={{
            peers: peers, 
            myRef: myRef,
            turnOffCamera: turnOffCamera,
            turnOnCamera: turnOnCamera,
            turnOffMicro: turnOffMicro,
            turnOnMicro: turnOnMicro,
            stream1: stream1
            
        }}>
            <InRoom>
                <div ref={myRefJSX} className={`${classes.indexRoot} _3023`}>
                    <Tingting />
                        <M refSharing={refSharing} />
                            <Suspense fallback={<div></div>}>
                            <H />
                        </Suspense>
                    <FooterIndex isSharing={()=> ShareScreen(refSharing)} />
                </div>
            </InRoom>
        </ContextT.Provider>
    )
}

export default T