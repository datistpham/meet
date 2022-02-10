import { useState } from "react"
import { createContext } from "react"
import { ContainerPType } from "../../docs/type/containerp_context"
import PrepareToJoin from "../PrepareToJoin/PrepareToJoin"

const initialContext: ContainerPType = {
    openBrightness: false,
    brightness: "",
    setBrightness: null
}
export const ContainerPContext= createContext(initialContext)
const ContainerP= (props: any)=> {
    const [state, setState]= useState<any>(()=> ({openBrightness: false, brightness: "" }))
    const setBrightness= ()=> {
        setState((prev: any)=> ({...prev, openBrightness: !state.openBrightness}))
    }
    return (
        <ContainerPContext.Provider value={{openBrightness: state.openBrightness, brightness: state.brightness, setBrightness: setBrightness}} >
            <PrepareToJoin />
        </ContainerPContext.Provider>
    )
}

export default ContainerP