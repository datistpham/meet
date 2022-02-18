import styled from "styled-components"
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser'
import { useContext } from "react"
import { ContextRoom } from "../../../../../../../../Index"
import Rating from '@mui/material/Rating'
import endcall from "../../../../../../../../../Assert/endcall_sound.mp3"

const Container= styled.div`
    width: 100%;
    height: 100%;

`
const Container2= styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 100px 25px 25px 25px;
    height: calc(372px + 100px + 25px)
`
const Section1= styled.div`
    width: 100%;
    text-align: center;
    font-size: 2.25rem;
    letter-spacing: 0;
    color: #3c4043;
    max-width: 700px;
    font-weight: 600;
    margin-left: auto;
    margin-right: auto
`
const Section2= styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center ;
    margin-top: 32px;
    
`
const ButtonSection2= styled.div`
    height: 36px;
    padding: 0 23px;
    border: 1px solid #dadce0;
    border-radius: 4px;
    margin-right: 4px;
    font-weight: 600;
    color: #1a73e8;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #6ba6f3;
    }
`
const ButtonSection2R= styled(ButtonSection2)`
    margin-right: 0px;
    margin-left: 4px;
    background-color: #1a73e8;
    color: #fff
`
const Section3= styled.div`
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #1a73e8;
    font-size: 14px;
    padding: 10px;
`
const Section4= styled.div`
    width: 314px;
    height: 156px;
    padding: 16px 16px 0 16px;
    border: 1px solid #dadce0;
    margin-bottom: 8px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;    
`
const Section41= styled.div`
    box-sizing: border-box;
    width: calc(100% - 58px);
    height: 100%;
    padding-left: 16px;
`
const Section411= styled.div`
    width: 100%;
    height: 48px;
    text-align: left;
    font-size: 18px;
    font-weight: 600;
`
const Section412= styled.div`
    color: #80868b;
    width: 100%;
    height: 60px;
    text-align: left;
`
const RatingContainer= styled.div`
    width: 360px;
    height: 106px;
    padding: 32px 24px 32px 24px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 1px 2px 0px rgb(60 64 67 / 30%), 0px 2px 6px 2px rgb(60 64 67 / 15%);
    border-radius: 8px;
    background: #fff;
    box-sizing: content-box;
`
const RatingTitle= styled.div`
    width: 100%;
    text-align: center;
    font-size: 15px;
    height: 24px;
    padding-bottom: 18px;
    font-weight: 600
`

const EndCall= ()=> {
    const { joinRoomAgain }= useContext(ContextRoom)
    return (

        <Container >
            
            <Container2>
                <Section1>
                    You'v left meeting room
                </Section1>
                <Section2>
                    <ButtonSection2 onClick={()=> joinRoomAgain()}>
                        Join Again
                    </ButtonSection2>
                    <ButtonSection2R onClick={()=> window.location.replace("https://localhost:3000/")}> 
                        Back to main screen
                    </ButtonSection2R>
                </Section2>
                <RatingContainer>
                    <RatingTitle>
                        What do you think about quality of meeting room?
                    </RatingTitle>
                    <Rating className="_9wie9dsqw" name="size-large" size="large" style={{width: '100%', height: 48, justifyContent: 'space-between',alignItems: 'center', padding: '0 12px'}} />
                    <div style={{height: 16, padding: "0 10px",display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                        <div style={{fontSize: 12}}>Bad</div>
                        <div style={{fontSize: 12}}>Excellent</div>
                    </div>
                </RatingContainer>
                <Section3>
                    Send feedback
                </Section3>
                <Section4>
                    <VerifiedUserIcon color="primary" style={{width: 58, height: 58, marginTop: -40}} />
                    <Section41>
                        <Section411>
                            Your meeting room is protected 
                        </Section411>
                        <Section412>
                            Nobody can join meeting room except organizer invite or accept
                        </Section412>
                    </Section41>
                </Section4>
            </Container2>
            <audio autoPlay>
                <source src={endcall} type="audio/mpeg" />
            </audio>
        </Container>
    )
}

export default EndCall