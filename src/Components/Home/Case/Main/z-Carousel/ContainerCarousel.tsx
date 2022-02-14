import styled from "styled-components"
import CarouselIndex from "./Carousel"
const Container= styled.div.attrs((props: any)=> ({
    type: "text",
    backgroundColor: props.a=== 5 ? "violet" : "blue"
}))`
    width: 50%;
    display: flex;
    height: auto,
    justify-content: center;
    align-items: center

`

const ContainerCarousel= ()=> {
    return (
        <Container>
            <CarouselIndex />
        </Container>
    )
}

export default ContainerCarousel