import { useEffect, useRef, useState, useMemo, createContext } from "react"
import styled from 'styled-components'
import ContainerP from "./Container/Container"
import { Context, Context2 } from "../docs/type/context_app"
import { io } from "socket.io-client"
import { useContext } from "react"
import { MyContext } from "../Components/Context/Context"
import { useLocation, useParams } from "react-router-dom"
import { Helmet } from "react-helmet-async"
import { memo } from "react"
// import { ListUserType } from "../docs/type/return-user"
// import { State2Type } from "../docs/type/state2-type"


const initialContext: Context & Context2= {
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
    webcamName: "",
    listaudioinput: [],
    listaudiooutput: [],
    listcamerainput: [],
    audioDefaultId: "",
    webcamDefaultId: "",
    chooseAudio: ()=> null,
    chooseCamera: ()=> null,
    audioParallel: true,
    videoParallel: true,
    toggleVideoParallel: null,
    toggleAudioParallel: null,
    joined: false, setJoined: ()=> null,
    socketRef: null,
    listUserF: null, 
    cannotRunVideo: false,
    idSelf: "",
    userList: null,
    test: false,
    current: null,
    leave: false, leaveRoom: ()=> null,
    joinRoomAgain: null,
    bossRoom: "member"
}
const ContextRoom= createContext(initialContext)
export const StyledVideo = styled.video`
    width: 100%;
    flex: 1 1 auto;
    transform: scaleX(-1);
`
export const Video= memo((props: any)=> {
    const ref= useRef<any>(null)
    useEffect(()=> {
        props.peer.on("stream", (stream: any) => {
            ref!.current.srcObject= stream
        })
    },[props.peer])
    return (
        <StyledVideo playsInline autoPlay ref={ref} />
    )
})
const ContextProVider= () => {
    const location: any= useLocation()
    const bossRoom=  useMemo(()=> (location?.state?.bossRoom || "member"), [location]) 
    const { username, photoUrl }= useContext(MyContext)
    const { roomID }= useParams()
    const userVideo= useRef<any>(null)
    const socketRef= useRef<any>(null)
    const [stream1, setStream]= useState<any>(()=> null)
    const [ devices, setDevices ]= useState<{audioName: string,audioDefaultId?: string | boolean, webcamDefaultId?: string | boolean, webcamName: string,zIndex: number, backgroundColor: string, borderColor: string, backgroundColor2: string, borderColor2: string, a1: Array<any>, a2: Array<any>, a3: Array<any>, videoParallel: boolean, audioParallel: boolean, cannotRunVideo: boolean, test: boolean}>(()=> ({audioName: "", webcamName: "", zIndex: 1, backgroundColor: "none", borderColor: "#fff", backgroundColor2: "none", borderColor2: "#fff", a1: [], a2: [], a3: [], audioDefaultId: "", webcamDefaultId: "", videoParallel: true, audioParallel: true, cannotRunVideo: false, test: false }))
    const [state, setState]= useState<{joined: boolean, listUser: Array<object>, numberUsers: number, idSelf: string, leave: boolean}>(()=> ({joined: false, listUser: [], numberUsers: 0, idSelf: "", leave: false}))
    const videoConstraints: any = useMemo(()=> ({video: { deviceId: devices.webcamDefaultId }, audio: { echoCancellation: true, deviceId: devices.audioDefaultId } }), [devices.audioDefaultId,devices.webcamDefaultId])
    const constraints = useMemo(()=> ({
        width: {min: 640, ideal: 1280},
        height: {min: 480, ideal: 720},
        advanced: [
          {width: 1920, height: 1280},
          {aspectRatio: 1.777}
        ]
      }), [])
    useEffect(()=> {
        // socketRef.current= io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
        const getUserMedia= async ()=> {
            try {
                socketRef.current=  io(`http://localhost:8000/`, { transports: ['websocket', 'polling'] })
                const stream= await navigator.mediaDevices.getUserMedia(videoConstraints)
                await stream.getVideoTracks()[0].applyConstraints(constraints)
                setDevices((prev: any)=> ({...prev,audioName: stream.getTracks()[0].label, webcamName: stream.getTracks()[1].label, test: true }))
                setStream(stream)
                userVideo.current.srcObject= stream
                // socketRef!.current.emit("join room", roomID)
                // socketRef!.current.on("all users", (users: any)=> {
                //     const peers: any= []
                //     users.forEach((userID: any)=> {
                //         const peer= createPeer(userID, socketRef.current.id, stream)
                //         peersRef.current.push({
                //             peerID: userID,
                //             peer
                //         })
                //         peers.push(peer)
                //     })
                //     setPeers(peers)
                // })
                // socketRef.current.on("user joined", (payload: any)=> {
                //     const peer= addPeer(payload.signal, payload.callerID, stream)
                //     peersRef.current.push({
                //         peerID: payload.callerID,
                //         peer
                //     })
                //     setPeers((users: any)=> [...users, peer])
                // })
                // socketRef.current.on("receiving returned signal", (payload: any)=> {
                //     const item= peersRef.current.find((p: any)=> p.peerID=== payload.id)
                //     item.peer.signal(payload.signal)
                // })
            }
            catch(e) {
                console.log(e)
            }
        }
        getUserMedia()
        const getDevices= async ()=> {
            try {
                const devices= await navigator.mediaDevices.enumerateDevices()
                setDevices((prev: any)=> ({...prev, a1: devices.filter(item=> item.kind=== "audioinput"), a2: devices.filter(item=> item.kind=== "audiooutput"), a3: devices.filter(item=> item.kind=== "videoinput")}))
            } catch (error) {
                console.log(error)
            }
        }
        getDevices()
        
    },[ videoConstraints, constraints, roomID ])
    

    const leaveRoom = ()=> {
        setState((prev: any)=> ({...prev, leave: true, joined: false}))
        socketRef.current.emit("user-disconnect", { roomID })
    }
    const joinRoomAgain= ()=> {
        window.location.replace(`https://localhost:3000/${roomID}`)
    }

    // 
    const turnOffCamera= async ()=> {
        setDevices((prev: any)=> ({...prev, zIndex: 2, backgroundColor: "#d93025",borderColor: "#d93025"}))
        await stream1.getVideoTracks().forEach((track: any) => track.enabled = false)
    }
    const turnOnCamera= async ()=> {
        setDevices((prev: any)=> ({...prev, zIndex: 0, backgroundColor: "transparent", borderColor: "#fff"}))
        await stream1.getVideoTracks().forEach((track: any) => track.enabled = true)
    }
    const turnOffMicro= async ()=> {
        setDevices((prev: any)=> ({...prev, backgroundColor2: "#d93025", borderColor2: "#d93025"}))
        stream1.getAudioTracks()[0].enabled= false
    }
    const turnOnMicro= async ()=> {
        setDevices((prev: any)=> ({...prev, backgroundColor2: "transparent", borderColor2: "#fff"}))
        stream1.getAudioTracks()[0].enabled= true
    }
    const chooseAudio= (audio: any)=> {
        setDevices((prev: any)=> ({...prev, audioDefaultId: audio}))
    }
    const chooseCamera= (video: any)=> {
        setDevices((prev: any)=> ({...prev, webcamDefaultId: video}))
    }
    const toggleVideoParallel= (video: any)=> {
        setDevices((prev: any)=> ({...prev, videoParallel: !devices.videoParallel}))
    }
    const toggleAudioParallel= (video: any)=> {
        setDevices((prev: any)=> ({...prev, audioParallel: !devices.audioParallel}))
    }
    const joinRoom= (): void => {
        setState((prev: any)=> ({...prev, joined: true}))
    }
    
    // 

    const listUserF= ()=> {
        socketRef.current.emit("user", {roomID, username, photoUrl, bossRoom})
        socketRef.current.on("self", (data: any)=> {
            // console.log(data)
            setState((prev: any)=> ({...prev, idSelf: data.socketId}))
        })
        socketRef.current.on("all-list-user", (data: any)=> {
            socketRef.current.emit("all-list-user-server", {roomID: roomID, allListUserS: data["allListUser"] })
        })  
        socketRef.current.on("count-room-user", (data: any)=> {
            socketRef.current.emit("counter-room-user-server", {roomID: roomID, numberOfuser: data["countUser"]})
        })
    }



    const userList= ((list: any)=> {
        setState((prev: any)=> ({...prev, listUser: list}))
    })


    return (
        <ContextRoom.Provider 
            value={{
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
                webcamName: devices.webcamName,
                listaudioinput: devices.a1,
                listaudiooutput: devices.a2,
                listcamerainput: devices.a3,
                audioDefaultId: devices.audioDefaultId,
                webcamDefaultId: devices.webcamDefaultId,
                chooseAudio: chooseAudio,
                chooseCamera: chooseCamera,
                videoParallel: devices.videoParallel,
                audioParallel: devices.audioParallel,
                toggleVideoParallel: toggleVideoParallel,
                toggleAudioParallel: toggleAudioParallel,
                joined: state.joined, setJoined: joinRoom,
                socketRef: socketRef,
                listUserF: listUserF,
                cannotRunVideo: devices.cannotRunVideo,
                idSelf: state.idSelf, userList: userList,
                test: devices.test,
                leave: state.leave,
                leaveRoom: leaveRoom,
                joinRoomAgain: joinRoomAgain,
                bossRoom: bossRoom
            }}
        >
            <Helmet>
                <title>Meet - {roomID}</title>
            </Helmet>
            <ContainerP />
            {/* <StyledVideo muted ref={userVideo} autoPlay playsInline />*/}
            {/* {peers.map((peer: any, index: any) => {
                return (
                    <Video key={index} peer={peer} />
                )
            })}  */}

        </ContextRoom.Provider>
    )
}
export {ContextProVider, ContextRoom }