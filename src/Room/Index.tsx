import React,{ useEffect, useRef, useState } from "react"
import { io } from "socket.io-client"
import styled from 'styled-components'
import { useParams } from "react-router-dom"
import { createContext } from "react"
import Peer from 'simple-peer'
import ContainerP from "./Container/Container"
import { useMemo } from "react"
interface Context {
    peers?: any,
    userVideo: any,
    turnOffCamera?:any,
    turnOnCamera?:any,
    turnOnMicro?: any,
    turnOffMicro?: any,
    zIndex: number,
    backgroundColor: string,
    borderColor: string,
    backgroundColor2: string,
    borderColor2: string,
    audioName?:string,
    webcamName?:string
}
const initialContext: Context= {
    peers: null,
    userVideo: null,
    turnOffCamera: null,
    turnOnCamera: null,
    turnOnMicro: null,
    turnOffMicro: null,
    zIndex: 0,
    backgroundColor: "none",
    borderColor: "#fff",
    backgroundColor2: "none",
    borderColor2: "#fff", 
    audioName: "",
    webcamName: ""
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
const ContextProVider= React.memo(() => {
    const [peers, setPeers]= useState<any>([])
    const socketRef= useRef<any>(null)
    const userVideo= useRef<any>(null)
    const peersRef= useRef<any>([])
    const { roomID }= useParams()    
    const [stream1, setStream]= useState<any>(()=> null)
    const [ devices, setDevices ]= useState<{audioName: string, webcamName: string,zIndex: number, backgroundColor: string, borderColor: string, backgroundColor2: string, borderColor2: string}>(()=> ({audioName: "", webcamName: "", zIndex: 1, backgroundColor: "none", borderColor: "#fff", backgroundColor2: "none", borderColor2: "#fff"}))
    const videoConstraints = useMemo(()=> ({video: true, audio: { echoCancellation: true } }), [])
    const constraints = useMemo(()=> ({
        width: {min: 640, ideal: 1280},
        height: {min: 480, ideal: 720},
        advanced: [
          {width: 1920, height: 1280},
          {aspectRatio: 1.333}
        ]
      }), [])
    useEffect(()=> {
        socketRef.current= io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
        const getUserMedia= async ()=> {
            try {
                const stream= await navigator.mediaDevices.getUserMedia(videoConstraints)
                setDevices((prev: any)=> ({...prev,audioName: stream.getTracks()[0].label ,webcamName: stream.getTracks()[1].label}))
                setStream(stream)
                userVideo.current.srcObject= stream
                stream.getVideoTracks()[0].applyConstraints(constraints)
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
        // const getDevices= async ()=> {
        //     try {
        //         const devices= await navigator.mediaDevices.enumerateDevices()
        //         setDevices((prev: any)=> ({...prev, a1: devices}))
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        // getDevices()
    },[roomID, videoConstraints, constraints])
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
    
    const turnOffCamera= ()=> {
        setDevices((prev: any)=> ({...prev, zIndex: 2, backgroundColor: "#d93025",borderColor: "#d93025"}))
        stream1.getVideoTracks().forEach((track: any) => track.enabled = false)
    }
    const turnOnCamera= async ()=> {
        setDevices((prev: any)=> ({...prev, zIndex: 0, backgroundColor: "transparent", borderColor: "#fff"}))
        stream1.getVideoTracks().forEach((track: any) => track.enabled = true)
    }
    const turnOffMicro= async ()=> {
        setDevices((prev: any)=> ({...prev, backgroundColor2: "#d93025", borderColor2: "#d93025"}))
        stream1.getAudioTracks()[0].enabled= false
    }
    const turnOnMicro= async ()=> {
        setDevices((prev: any)=> ({...prev, backgroundColor2: "transparent", borderColor2: "#fff"}))
        stream1.getAudioTracks()[0].enabled= true
    }
    return (
        <ContextRoom.Provider 
            value={{
                peers: peers, 
                userVideo: userVideo,
                turnOffCamera: turnOffCamera, 
                turnOnCamera: turnOnCamera, 
                turnOnMicro, turnOffMicro, 
                zIndex: devices.zIndex, 
                backgroundColor: devices.backgroundColor, 
                borderColor: devices.borderColor,
                backgroundColor2: devices.backgroundColor2, 
                borderColor2: devices.borderColor2,
                audioName: devices.audioName,
                webcamName: devices.webcamName
            }}
        >
            <ContainerP />
            {/* <StyledVideo muted ref={userVideo} autoPlay playsInline />*/}
            {/* {peers.map((peer: any, index: any) => {
                return (
                    <Video key={index} peer={peer} />
                )
            })}  */}

        </ContextRoom.Provider>
    )
})
export {ContextProVider, ContextRoom }