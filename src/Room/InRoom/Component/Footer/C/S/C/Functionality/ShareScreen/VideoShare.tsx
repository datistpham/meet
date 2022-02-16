const VideoShare= (props: any)=> {
    return (
        <video ref={props.myRef} autoPlay muted playsInline style={{width: "100%", height: "100%", position: 'relative', zIndex: 2}} />
    )
}

export default VideoShare