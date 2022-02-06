import { Suspense } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { lazy } from 'react'
import { useStyles } from '../Account'
import InfoAccount from './Logout/InfoAccount'
const AvatarLogged= lazy(()=> import("./AvatarLogged"))

const Logged = (props: any) => {
    const myRef= useRef<any>(null)
    const classes= useStyles()
    const [openPopup, setOpenPopup]= useState<boolean>(()=> false)
    const togglePopup= (): void=> {
        setOpenPopup(prev=> !prev)
    }
    
    const handleOutSidePopup= (e: Event)=> {
        if(myRef.current && !myRef.current.contains(e.target)) {
            setOpenPopup(()=> false)
        }
    }
    useEffect(()=> {
        document.addEventListener("mousedown", handleOutSidePopup)
        return ()=> document.removeEventListener("mousedown", handleOutSidePopup)
    })
    return (
        <div ref={myRef} className={classes.logged}>
            <div onClick={()=> togglePopup()} className={classes.subLogged}>
                <Suspense fallback={<div></div>}>
                    <AvatarLogged photoUrl={props.photoUrl} />
                </Suspense>
            </div>
            {
                openPopup=== true &&
                <InfoAccount />
            }
        </div>

    ) 
}

export default Logged
