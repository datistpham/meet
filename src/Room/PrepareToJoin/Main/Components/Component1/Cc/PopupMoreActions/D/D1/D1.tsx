import { useState } from "react"
import { useEffect } from "react"
import { useRef } from "react"
import { useStyles } from "../../Styles/style"
import ContainerD1 from "./ContainerD1"

const D1= (props: any)=> {
    const classes= useStyles()
    const [state, setState]= useState<{a1: boolean}>(()=> ({a1: false}))
    const myRef= useRef<any>(null)
    const handleClickOutside= (e: Event)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setState(prev=> ({...prev, a1: false}))
        }
    }
    const handleClickInside= ()=> {
        setState(prev=> ({...prev, a1: true}))
    }
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutside)
        return ()=> document.removeEventListener("mousedown", handleClickOutside)
    },[])
    return (
        <div onClick={()=> {handleClickInside();props.openState()}} ref={myRef} className={`${classes.d1}`} >
            <ContainerD1 a1={state.a1} a2={props.state} icon={props.icon} title={props.title} />
        </div>
    )
}

export default D1