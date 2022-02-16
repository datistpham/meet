import { CircularProgress } from "@mui/material"
import styled from "styled-components"
import PresentToAllIcon from '@mui/icons-material/PresentToAll'
const Container= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8)
    z-index: 1
`
const S1= styled.div`
    width: 144px;
    height: 144px;
    position: relative;
`
const S2= styled.div`
    width: 100%;
    height: 100%;

`
const DeLayShare= ()=> {
    return (
        <Container>
            <S1>
                <S1>
                    <S2 className="_93i2we">
                        <CircularProgress size={144} color="inherit" />
                        <PresentToAllIcon style={{width: 64, height: 64}} />
                    </S2>
                </S1>
            </S1>
        </Container>
    )
}

export default DeLayShare