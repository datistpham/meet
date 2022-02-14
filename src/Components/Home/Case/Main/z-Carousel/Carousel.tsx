import { useMemo } from "react"
import styled from "styled-components"
import Carousel from "react-material-ui-carousel"
import { nanoid } from "nanoid"

interface ItemType {
    image: string, 
    title1: string,
    title2: string
}
const CarouselComponent= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%
`
const ContainerImage= styled(CarouselComponent)`
    width: 330px; 
    height: 330px;
    border-radius: 50%;
    overflow: hidden
    
`
const Image= styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover
`
const CSection2= styled.div`
    width: 330px;
    height: 64px;
    margin-top: 12px;
    text-align: center;
    font-size: 24px;
    color: #000000DE;
    font-weight: 600
`
const CSection3= styled.div`
    width: 330px;
    height: 40px;
    text-align: center;
    color: #000000DE;
    font-size: 14px

`

const Button= styled.button`

`
const CarouselIndex= ()=> {
    const items= useMemo(()=> ([
        {
            image: "https://www.gstatic.com/meet/user_edu_get_a_link_light_90698cd7b4ca04d3005c962a3756c42d.svg",
            title1: "get a link you can share ",
            title2: "Click New room to get a link and send to people who you want meeting ",
        },
        {
            image: "https://www.gstatic.com/meet/user_edu_brady_bunch_light_81fa864771e5c1dd6c75abe020c61345.svg",
            title1: "Watch everyone together",
            title2: "To watch more people, move to change layout in other options",
        },
        {
            image: "https://www.gstatic.com/meet/user_edu_scheduling_light_b352efa017e4f8f1ffda43e847820322.svg",
            title1: "Plan ahead",
            title2: "Click New room to get a link and send to people who you want meeting ",
        },
        {
            image: "https://www.gstatic.com/meet/user_edu_safety_light_e04a2bbb449524ef7e49ea36d5f25b65.svg",
            title1: "Your meeting room is safe protected ",
            title2: "No one can join meeting room except organizer invite or allow",
        }

    ]), [])
    return (
        <CarouselComponent>
            <Carousel className="_984i9we" 
                navButtonsAlwaysVisible={true}
                swipe={true}
                stopAutoPlayOnHover={true}
                animation="fade"
            >
                {
                    items.map((item: ItemType, key: number)=> <Merge key={nanoid()} image={item.image} title1={item.title1} title2={item.title2} />)
                }
            </Carousel>
        </CarouselComponent>
    )
}
const Section1= (props: any)=> {
    return (
        <ContainerImage>
            <Image src={props.image} alt="open" draggable={false} />

        </ContainerImage>
    )
}
const Section2= (props: any)=> {
    return (
        <CSection2>
            {props.title1}
        </CSection2>
    )
}
const Section3= (props: any)=> {
    return (
        <CSection3>
            {props.title2}
        </CSection3>
    )
}
const Merge= (props: ItemType)=> {
    return (
        <>
            <Section1 image={props.image} />
            <Section2 title1={props.title1} />
            <Section3 title2={props.title2} />
        </>
    )
}

export default CarouselIndex