import { useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import { createContext } from "react"
import Peer from 'simple-peer'
import ContainerP from "./Container/Container"

interface Context {
    peers: any,
    userVideo: any
}
const initialContext: Context= {
    peers: null,
    userVideo: null
}
type Props= {
    children: React.ReactNode
}
const ContextRoom= createContext(initialContext)

const StyledVideo = styled.video`
    height: 40%;
    width: 50%;
    transform: scaleX(-1);
`
export const Video= (props: any)=> {
    const ref= useRef<any>(null)
    useEffect(()=> {
        props.peer.on("stream", (stream: any) => {
            ref!.current.srcObject= stream
        })
    },[props.peer])
    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    )
}
const videoConstraints = {
    height: window.innerHeight / 2,
    width: window.innerWidth / 2
}
const ContextProVider= () => {
    const [peers, setPeers]= useState<any>([])
    const socketRef= useRef<any>(null)
    const userVideo= useRef<any>(null)
    const peersRef= useRef<any>([])
    const { roomID }= useParams()    
    useEffect(()=> {
        socketRef.current= io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
        const getUserMedia= async ()=> {
            try {
                const stream= await navigator.mediaDevices.getUserMedia({ video: videoConstraints, audio: false })
                userVideo.current.srcObject= stream
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
            }
            catch(e) {
                console.log(e)
            }
        }
        getUserMedia()
    },[roomID])
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
    return (
        <ContextRoom.Provider 
            value={{
                peers: peers, userVideo: userVideo, 
            }}
        >
            <ContainerP userVideo={userVideo} />
            {/* <StyledVideo muted ref={userVideo} autoPlay playsInline />
            {peers.map((peer: any, index: any) => {
                return (
                    <Video key={index} peer={peer} />
                )
            })} */}

        </ContextRoom.Provider>
    )
}
export {ContextProVider, ContextRoom }