import { useRef, useState, lazy, Suspense } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
// import { Video } from "../../Index"
import { io } from "socket.io-client"
import {  InRoom } from "../Index"
import Peer from 'simple-peer'
import { useStyles } from "../Style/main_style"
import FooterIndex from "./Footer/Index"
import tingting from "../../../Assert/sound_just_join_room.mp3"
import { createContext } from "react"
import { ContextTType } from "../../../docs/type/contextTtype"
// import { useContext } from "react"
// import { ContextRoom } from "../../Index"
const M = lazy(() => {
    return new Promise((resolve: any): any => {
      setTimeout(() => resolve(import("./Main/M")), 500);
    })
  })
const initialContext: ContextTType= {
    peers: null,
    myRef: null
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
    // const { idSelf }= useContext(ContextRoom)

    const { roomID }= useParams()
    useEffect(()=> {
        (async()=> {
            try {
                socketRef.current= io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
                const stream= await navigator.mediaDevices.getUserMedia({video: true, audio: true})
                
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
    },[roomID ])
    
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
    
    return (
        <ContextT.Provider value={{
            peers: peers, 
            myRef: myRef,
            
        }}>
            <InRoom>
                <div ref={myRefJSX} className={`${classes.indexRoot} _3023`}>
                    <Tingting />
                    <Suspense fallback={<div className={classes.mainIndex}></div>}>
                        <M />
                    </Suspense>
                    <FooterIndex />
                </div>
            </InRoom>
        </ContextT.Provider>
    )
}

export default T