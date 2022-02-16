
const ShareScreen = async (myRef: any)=> {
    try {
        const stream= await navigator.mediaDevices.getDisplayMedia({video: true, audio: true})
        await stream.getTracks()[0].applyConstraints()
        myRef.current.srcObject= stream
    } catch (error) {
        console.log(error)        
    }

}

export { ShareScreen }