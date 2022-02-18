import { Container, Section1, Section11, Section12, Close } from "../C1/C1"
import styled from "styled-components"
import Switch from '@mui/material/Switch'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'


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
const Section4= styled.div`
    width: 312px;
    height: 316px;
    box-sizing: content-box;
    padding: 14px 24px;
    overflow: auto;
`
const Section5= styled.div`
    height: 48px;
    width: 330px;
    margin: 15px;
    border-radius: 80px;
    background-color: #f1f3f4;
    display: flex; 
    justify-content: center;
    align-items: center;
`

const Section51= styled.div`
    width: calc(100% - 48px);
    display: flex; 
    justify-content: center;
    align-items: center;
`
const Section512= styled.textarea`
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
const Section52= styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`
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
            <Section4 className="_0rujefda">
                
            </Section4>
            <Section5>  
                <Section51>
                    <Section512 placeholder="Send message to everyone">

                    </Section512>
                </Section51>
                <Section52>
                    <SendOutlinedIcon style={{width: 24, height: 24, color: 'rgba(60,64,67,0.38)'}} />
                </Section52>
            </Section5>
        </Container>
    )
}

export default C3