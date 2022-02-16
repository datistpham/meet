import { useContext } from "react"
import { MyContext } from "../../../../../Components/Context/Context"
import styled from "styled-components"
import { CircularProgress } from "@mui/material"

const ImageWrapper= styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
    border-radius: 50%;
    image-resolution: from-image    
`
const Pseudo= ()=> {
    const { photoUrl }= useContext(MyContext)
    if(photoUrl!== null && photoUrl!== undefined) {
        return (
            <div className="_293iekd" style={{width: "100%", height: '100%', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, display: "flex", justifyContent: "center", alignItems: 'center'}}>
                <ImageWrapper src={photoUrl} alt="open" referrerPolicy="no-referrer" >
                    
                </ImageWrapper>
            </div>
        )
    }
    else {
        return (
            <CircularProgress />
        )
    }
}

export default Pseudo