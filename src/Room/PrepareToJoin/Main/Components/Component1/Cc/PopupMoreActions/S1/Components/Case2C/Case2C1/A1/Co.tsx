import React, { useEffect, useRef, useState } from "react"
import { CoS4Type } from "../../../../../../../../../../../../docs/type/cos4"
import { useStyles } from "../../../../../Styles/style"

const Co= (props: any)=> {
    const classes= useStyles()
    const myRef= useRef<HTMLDivElement>(null)
    const [open, setOpen]= useState<{a1: boolean, s4: boolean, newDevice?: string}>(()=> ({a1: false, s4: false, newDevice: ""}))
    
    const handleClickOutSide= (e: Event) => {
        if(myRef.current && !myRef.current.contains(e.target as Element)) {
            setOpen((prev: any)=> ({...prev, a1: false}))
        }
    }
    const hanldeClickClose= (e: Event)=> {
        e.stopPropagation()
        setOpen((prev: any)=> ({...prev, a1: false}))

    }
    const handleClickInSide= ()=> {
        setOpen((prev: any)=> ({...prev, a1: true}))

    }
    const F4= (a: any)=> {
        setOpen((prev: any)=> ({...prev, s4: true, newDevice: a}))
    }
    // const setNewDevice= (a: any)=> {
    //     setOpen((prev: any)=> ({...prev, newDevice: a}))
    // }
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutSide)
        return ()=> document.removeEventListener("mousedown", handleClickOutSide)
    })    
    
    return (
        <div onClick={()=> handleClickInSide()} ref={myRef} className={classes.co} >
            <CoS1 icon={props.icon} />
            <CoS2 category={props.category} devices={open.s4=== false ? props.devices : open.newDevice} />
            <CoS3 />
            {
                open.a1=== true &&
                <CoS4 f4={F4} hanldeClickClose={hanldeClickClose} chooseDevice={props.chooseDevice} open={open.a1} handleClose={handleClickOutSide} list={props.list} />
            }
        </div>
    )
}
const CoS4= (props: CoS4Type)=> {
    const { list, chooseDevice, hanldeClickClose, f4 }= props
    
    // const Activing= (e: Event)=> {
    //     setActive((prev: boolean)=> !prev)
    // }
    
    return (
       <div className="_euw9j2w" style={{display: "flex", flexDirection: "column",position: "absolute",  zIndex: 10, backgroundColor: "#fff", top: "100%",left: 0, boxShadow: "0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%)", marginTop: 10,}} >
           {
               list.map((item:any, key: number)=> <CoS41 f4={f4} hanldeClickClose={hanldeClickClose} chooseDevice={chooseDevice} key={key} label={item.label} deviceId={item.deviceId} />)
           }
       </div>
    )
}
const CoS41= (props: any)=> {
    const classes= useStyles()
    
    return (
        <div onClick={(e)=> {props.chooseDevice(props.deviceId);props.hanldeClickClose(e);props.f4(props.label)}} className={`_5201 ${classes.cos41}`} style={{height: 44, padding: "0 12px", display: 'flex', justifyContent: "center", alignItems: 'center' }}>
            <div className="_9433" style={{width: "100%", whiteSpace: "nowrap"}}>
                {props.label}
            </div>
        </div>
    )
}

// 

const CoS1= (props: any)=> {
    return (
        <div style={{width: 44, height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{width: 22, margin: '0 12px'}}>
                {props.icon}
            </div>
        </div>
    )
}
const CoS2= (props: any)=> {
    return (
        <div style={{width: 'calc(100% - 44px - 44px)', height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <CoS21 category={props.category} />
            <CoS22 devices={props.devices} />
        </div>
    )
}
const CoS21= (props: any)=> {
    return (
        <div style={{fontSize: 14,fontWeight: 500, justifySelf: "flex-start", alignItems: 'left',width: "100%"}}>
            {props.category}
        </div>
    )
}
const CoS22= (props: any)=> {
    return (
        <div style={{height: 28, display: "flex", justifyContent: "center", alignItems: 'center',width: '100%'}}>
            <div style={{height: "100%", width: "100%", overflow: 'hidden', textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                {props.devices}
            </div>
        </div>
    )
}
const CoS3= (props: any)=> {
    return (
        <div style={{width: 44, height: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <I />
        </div>
    )
}
const I= (props: any)=> {
    return (
        <span style={{width:20 , height: 20,display: 'flex', justifyContent: 'center', alignItems: 'center', margin: "0 12px"}}>
            <svg style={{width: "41.6666666%", height: "20.833333333%"}} className="VfPpkd-t08AT-Bz112c-Bd00G" viewBox="7 10 10 5" focusable="false"><polygon className="VfPpkd-t08AT-Bz112c-mt1Mkb" stroke="none" fillRule="evenodd" points="7 10 12 15 17 10"></polygon></svg>
        </span>
    )
}

export const Co1= (props: any)=> {
    return (
        <div style={{width: '100%', height: 48}}>

        </div>
    )
}



export default React.memo(Co)