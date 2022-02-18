const handleFullScreen= (a: any)=> {
    const elem= document.body
    if(elem.requestFullscreen) {
        elem.requestFullscreen()
        a(()=> true)
    }
    
    

}
const handleExitFullScreen= (a: any)=> {
    if(document.exitFullscreen) {
        document.exitFullscreen()
        a(()=> false)
    }
}

export { handleFullScreen, handleExitFullScreen }