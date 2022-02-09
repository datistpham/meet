export interface Context {
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
    webcamName?:string,
    listaudioinput?: Array<any>,
    listaudiooutput?: Array<any>,
    listcamerainput?: Array<any>
}