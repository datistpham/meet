export interface Context {
    peers?: any
    userVideo: any
    turnOffCamera?:any
    turnOnCamera?:any
    turnOnMicro?: any
    turnOffMicro?: any
    zIndex: number
    backgroundColor: string
    borderColor: string
    backgroundColor2: string
    borderColor2: string
    audioName?:string
    webcamName?:string
    listaudioinput?: Array<any>
    listaudiooutput?: Array<any>
    listcamerainput?: Array<any>
    audioDefaultId: any
    webcamDefaultId: any
    chooseAudio: (audio: any)=> any
    chooseCamera: (video: any)=> any
    audioParallel: boolean
    videoParallel: boolean
    toggleVideoParallel: any
    toggleAudioParallel: any
    joined: boolean
    setJoined: ()=> void
}

export interface Context2 {
    socketRef: any
    listUserF: any
    cannotRunVideo: boolean
    idSelf: string
    userList: any
}