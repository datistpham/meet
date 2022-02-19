import { Container, Section1, Section11, Section12, Close } from "../C1/C1"
import styled from "styled-components"
import Switch from '@mui/material/Switch'
import FrameChat from "./FrameChat"

// import $ from "jquery"

const Section2= styled.div`
    width: 100%;
`
const Section21= styled.div`
    margin: 12px;
    padding: 12px;
    width: 312px;
    height: 16px;
    box-sizing: content-box;
    border-radius: 2px;
    background: #f1f3f4;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
const Section211= styled.div`
    font-size: 12px;
`
const Section3= styled(Section21)`
    height: 32px;  
    font-size: 12px;
    text-align: center;
`
export const Section4= styled.div`
    width: 312px;
    height: 316px;
    box-sizing: content-box;
    padding: 14px 24px;
    overflow: auto;
`
export const Section5= styled.div`
    height: 48px;
    width: 330px;
    margin: 15px;
    border-radius: 80px;
    background-color: #f1f3f4;
    display: flex; 
    justify-content: center;
    align-items: center;
`

export const Section51= styled.div`
    width: calc(100% - 48px);
    display: flex; 
    justify-content: center;
    align-items: center;
`
export const Section512= styled.textarea`
    width: 100%;
    height: 24px;
    font-size: 14px;
    color: #5f6368;
    resize: none;
    outline: none; border: none;
    display: flex; 
    justify-content: center;
    align-items: center;
    background-color: inherit;
    line-height: 24px;
    padding: 0 10px
`
export const Section52= styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer
`
const ContentMessage= styled.div`
    width: 100%;
    box-sizing: border-box;
    
`
const SectionContentMessage1= styled.div`
    height: 20px
`
const SectionContentMessage11= styled.span`
    color: #202124;
    font-size: 13px;
    font-weight: 600;
    padding-right: 8px;
`
const SectionContentMessage12= styled.span`
    color: #5f6368;
    font-size: 12px
`
const SectionContentMessage2= styled(SectionContentMessage11)`
    font-weight: 400
`
export const PerMessage= (props: any)=> {
    return (
        <ContentMessage>
            <SectionContentMessage1 style={{height: props.height, paddingTop: props.paddingTop}}>
                <SectionContentMessage11>{props.username}</SectionContentMessage11>
                <SectionContentMessage12>{props.timestamp}</SectionContentMessage12>
            </SectionContentMessage1>
            <SectionContentMessage2>{props.text}</SectionContentMessage2>
        </ContentMessage>
    )
}
const C3= (props: any)=> {
    
    return (
        <Container>
            <Section1>
                <Section11>
                    Message in meeting room
                </Section11>
                <Section12 onClick={()=> props.setPopupFalse()}>
                    <Close />
                </Section12>
            </Section1>
            <Section2>
                <Section21>
                    <Section211>
                        Allow everyone can chat
                    </Section211>
                    <Switch defaultChecked />
                </Section21>
            </Section2>
            <Section3>
                Message will only show for people who join meeting room and will be deleted when call ended
            </Section3>
            <FrameChat messageRoom={props.messageRoom} setMessageRoom={props.setMessageRoom} />
        </Container>
    )
}

export default C3