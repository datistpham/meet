import React, { useRef, memo } from "react"
import styled from "styled-components"
import { useStore } from "../../zustand/store"
import { ReactMic } from "react-mic"

const Container= styled.div`
    width: 26px;
    height: 26px;
    background-color: rgba(26,115,232,0.902);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 200;
`
// const sleep =( ms: number) => new Promise(r => setTimeout(r, ms))
const DetectMic= ()=> {
    const myRef: React.RefObject<HTMLDivElement>= useRef(null)
    const myRef2: React.RefObject<HTMLDivElement>= useRef(null)
    const myRef3: React.RefObject<HTMLDivElement>= useRef(null)

    const checkAudio= useStore(state=> state.checkAudio)
    const onData= async (recordedBlob: any)=> {
        if(recordedBlob.size >= 975) {
            myRef.current?.classList.add("p21yBf")
            myRef2.current?.classList.add("qw9i394")
            myRef3.current?.classList.add("qw9i394")

        }
        else {
            myRef.current?.classList.remove("p21yBf")
            myRef2.current?.classList.remove("qw9i394")
            myRef3.current?.classList.remove("qw9i394")

        }

    }
    
    return (
        <Container>
            <div ref={myRef3} className="_w9u9322">

            </div>
            <div ref={myRef} className="_w9u9322 _ujweimdks">

            </div>
            <div ref={myRef2} className="_w9u9322">

            </div>
            <ReactMic
                record={checkAudio}
                className="sound-wave"
                onData={onData}
                strokeColor="#000000"
                backgroundColor="#FF4081"
                visualSetting={undefined}
                
            />
        
        </Container>
    )
}

export default memo(DetectMic)