import styled from "styled-components"
const IndentifyWrapper= styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex; 
    align-items: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    position: absolute;
    bottom: 0
`

const Indentify= ()=> {
    
    return (
        <IndentifyWrapper>
            You 
        </IndentifyWrapper>
    )
}

export default Indentify