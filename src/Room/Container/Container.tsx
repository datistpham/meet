import { Suspense } from "react"
import { useContext, useState, createContext, lazy } from "react"
import { ContainerPType } from "../../docs/type/containerp_context"
import { ContextRoom } from "../Index"
import EndCall from "../InRoom/Component/Footer/C/S/C/Functionality/EndCall/EndCall"
import CircularProgress from '@mui/material/CircularProgress'
import PrepareToJoin from "../PrepareToJoin/PrepareToJoin"

const T= lazy(()=> {
    return new Promise((resolve: any)=> {
        setTimeout(()=> resolve(import("../InRoom/Component/T")), 1000)
    })
})
const initialContext: ContainerPType = {
    openBrightness: false,
    brightness: "",
    setBrightness: null
}
export const ContainerPContext= createContext(initialContext)
const ContainerP= (props: any)=> {
    const [state, setState]= useState<any>(()=> ({openBrightness: false, brightness: "" }))
    const { joined, leave }= useContext(ContextRoom)
    const setBrightness= ()=> {
        setState((prev: any)=> ({...prev, openBrightness: !state.openBrightness}))
    }
    if(joined=== true && leave=== false) {
        return (
            <Suspense fallback={<div style={{position: 'fixed', width: '100%', height: '100%', top: 0, left: 0, backgroundColor: "#202124", display: 'flex', alignItems: 'center', justifyContent: 'center'}}><CircularProgress /><div style={{marginLeft: '1em', height: 36, color: "#fff", fontSize: 28, fontWeight: 600,}}>Loading...</div></div>}> 
                <T />
            </Suspense>
        )
    }
    else if(leave=== true ) {
        return (
            <EndCall />
        )
    }
    else {
        return (
            <ContainerPContext.Provider value={{openBrightness: state.openBrightness, brightness: state.brightness, setBrightness: setBrightness}} >
                <PrepareToJoin />   
            </ContainerPContext.Provider>
        )
    }
}

export default ContainerP