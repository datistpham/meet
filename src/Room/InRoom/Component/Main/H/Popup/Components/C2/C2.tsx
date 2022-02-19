import { Container, Section1, Section11, Section12, Close } from "../C1/C1"
import styled from "styled-components"
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'
import MicOffOutlinedIcon from '@mui/icons-material/MicOffOutlined'
import ToggleOffOutlinedIcon from '@mui/icons-material/ToggleOffOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import { createRef, forwardRef } from "react";
import { getListMember } from "../../../../../../../../recoil/selector"
import { useRecoilValue } from "recoil"
import { nanoid } from "nanoid"
import { useContext } from "react"
import { MyContext } from "../../../../../../../../Components/Context/Context"
interface Itemtype {
    photoUrl: string
    userName: string
    position?: string,
    tokenId?: string
}

const Section2= styled.div`
    height: 84px;
    width: 100%;
    display: flex;
    flex-direction: row;
    
`
const Section21= styled.div`
    flex: 1 1 auto;

    padding: 0 8px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    &:hover {
        background-color: #f2f0f5;
    }
`
const Section211= styled.div`
    height: 40px;
    padding: 10px;
    text-align: center;
    font-size: 14px;
    box-sizing: content-box;
    font-weight: 600;
    color: #5f6368
`

const Section3= styled.div`
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
`
const Section31= styled.div`
    width: 328px;
    height: 56px;
    margin: 4px 16px;
`
const Section311= styled.div`
    width: 100%;
    height: 56px;
    border-radius: 4px;
    border: 1px solid #000;
    padding-right: 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border: 1px solid #5f6368;
    &:focus {
        outline: 1px solid #2e89ff;
    }
`
const Section3111= styled.div`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Section3112= styled.input`
    height: 100%;
    width: calc(100% - 48px);
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    font-size: 16px;
    font-weight: 600;
`
const Section4= styled.div`
    margin: 4px 16px;
    font-size: 14px;
    color: #5f6368;
    font-weight: 600;
`
const Section3112C= forwardRef((props: any, ref: any)=> {
    // const changeOutline= ()=> {
    //     ref.current.style.background= 'ref'
    // }
    return (
        <Section3112 ref={ref} type="text" placeholder="Find person"></Section3112>
    )
})

const Section5= styled.div`
    width: 324px;
    height: 100%;
    padding: 0 16px 0 20px;
    box-sizing: content-box;
    user-select: none;
    pointer-events: none
`
const ContainerSection5= styled.div`
    width: 100%;
    height: 300px;
    overflow: auto;
    box-sizing: border-box;
`
const Section511= styled.div`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;

`
const Section5112= styled.div`
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Section51121= styled.div`
    width: 32px;
    height: 32px;
    object-fit: cover;
    margin-right: 16px;
    border-radius: 50%;
    overflow: hidden;
`
const Section51122= styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center

`
const Section511221= styled.div`
    font-size: 14px;
    color: #000000de;
    text-align: left;
    width: 100%;
    font-weight: 600;
`
const Section511222= styled.div`
    font-size: 12px;
    color: #000000de;
    text-align: left;
    width: 100%;

`
const Section511211= styled.img`
    width: 100%;
    height: 100%;
`
const ref: any= createRef()
const C2= (props: any)=> {
    const listMemberRooms= useRecoilValue(getListMember)
    const { tokenId }= useContext(MyContext)
    return (
        <Container>
            <Section1>
                <Section11>Everyone</Section11>
                <Section12 onClick={()=> props.setPopupFalse()}><Close /></Section12>
            </Section1>
            <Section2>
                <Section21>
                    <MicOffOutlinedIcon style={{width: 24, height: 24, color :'#5f6368'}} />
                    <Section211>
                        Muted all 
                    </Section211>
                </Section21>
                <Section21>
                    <PersonAddAltOutlinedIcon style={{width: 24, height: 24, color :'#5f6368'}} />
                    <Section211>
                        Add member
                    </Section211>
                </Section21>
                <Section21>
                    <ToggleOffOutlinedIcon style={{width: 24, height: 24, color :'#5f6368'}} />
                    <Section211>
                        Controller's organizer    
                    </Section211>
                </Section21>
            </Section2>
            <Section3>
                <Section31>
                    <Section311 ref={ref}>
                        <Section3111><SearchOutlinedIcon style={{color: '#5f6368'}} /></Section3111>
                        <Section3112C />
                    </Section311>
                </Section31>
            </Section3>
            <Section4>
                In meeting room
            </Section4>
            <ContainerSection5 className="_ewiorjweureowew">
                    <Section5>
                {

                    listMemberRooms.map((item: Itemtype) => 
                        <Section511 key={nanoid()} >
                            <Section5112>
                                <Section51121>
                                    <Section511211 src={item.photoUrl} alt="open" referrerPolicy="no-referrer">
                                    </Section511211>
                                </Section51121>
                                <Section51122>
                                    <Section511221>
                                        {
                                            item.userName 
                                        }
                                        {
                                            tokenId=== item.tokenId && " (You)"            
                                        }
                                    </Section511221>
                                    <Section511222>
                                        {
                                            item.position=== "member" ? "Member" : "Meeting organizer"  
                                        }
                                    </Section511222>
                                </Section51122>
                            </Section5112>
                        </Section511>
                    )}
                    </Section5>
            </ContainerSection5>
        </Container>
    )
}

export default C2