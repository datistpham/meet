// import { useCallback } from "react"
import { useStore } from "../../../../../../../../zustand/store"

const X2= (props: any)=> {
    // const bears= useStore(useCallback(state=> state.bears, []))
    const increasePopulation= useStore(state=> state.increasePopulation)
    return (
        <div onClick={increasePopulation} style={{height: 20, margin: "32px 0 16px 0", textAlign: "center", fontSize: 14, fontWeight: 600}}>
            Other joining options
        </div>
    )
}

export default X2