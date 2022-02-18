import styled from "styled-components"
import CloseIcon from '@mui/icons-material/Close'
import { useParams } from "react-router-dom"
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {CopyToClipboard} from 'react-copy-to-clipboard'

export const Container= styled.div`
    width: 100%;
    height: 100%;
    color: #000;
`
export const Section1= styled.div`
    height: 64px;
    padding-left: 24px;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center
`
export const Section11= styled.div`
    font-size: 18px;
    font-weight: 600;
`
export const Section12= styled.div`
    width: 48px;
    height: 48px;
    margin-right: 5px;
    transition: all .1s linear;
    cursor: pointer;
    pointer-events: auto;
    border-radius: 50%;
    &:hover {
        background-color: #f2f0f5
    };
    &:active:hover {
        background-color: #3a3b3c;
    }
`

const Section2= styled.div`
    width: 100%;
    height: 104px;
    padding-bottom: 4px;
`
const Section21= styled.div`
    height: 20px;
    margin: 8px 24px;
    width: 312px;
    font-size: 14px;
    font-weight: 600;
    
`
const Section22= styled.div`
    padding-left: 8px;
    margin-left: 16px;
    height: 20px;
    width: 312px;
    color: #5f6368;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Section23= styled.div`
    height: 48px;
    box-sizing: border-box;
    margin: 6px 24px;
    display: flex; 
    align-items: center;
    gap: 10px;
    cursor: pointer;
    pointer-events: auto;
    &:hover {
        background-color: #96bef1
    }


`
const Section231= styled.div`
    color: #1a73e8;
    font-size: 14px;
    font-weight: 600
`
const Separated= styled.div`
    width: 100%;
    border-top: 1px solid rgba(0,0,0,0.12);
    margin: 7px 0;
`
export const Close= (props: any)=> {
    return (
        <CloseIcon style={{width: 24, height: 24,padding: 12, boxSizing: 'content-box'}} />
    )
}
const C1= (props: any)=> {
    const { roomID }= useParams()
    return (
        <Container>
            <Section1>
                <Section11>About meeting</Section11>
                <Section12 onClick={()=> props.setPopupFalse()}><Close /></Section12>
            </Section1>
            <Section2>
                <Section21>
                    Infomation on how to join
                </Section21>
                <Section22>
                    https://localhost:3000/{roomID}
                </Section22>
                <Section23>
                    <ContentCopyIcon style={{color: "#1a73e8", width: 16, height: 16}} />
                        <CopyToClipboard text={`https://localhost:3000/${roomID}`}>
                            <Section231>
                                Copy code meeting room
                            </Section231>
                        </CopyToClipboard>
                </Section23>
                <Separated></Separated>
            </Section2>
        </Container>
    )
}


export default C1