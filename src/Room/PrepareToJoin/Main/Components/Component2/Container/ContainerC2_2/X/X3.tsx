import { useContext } from "react"
import { ContextRoom } from "../../../../../../../Index"

const X3= (props: any)=> {
    const { listUserF }= useContext(ContextRoom)
    return (
        <div style={{height: 36, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',}}>
            <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center',paddingRight: 8}}>
                {props.icon}
            </div>
            <div onClick={()=> listUserF()} style={{fontSize: 14, fontWeight: 600, color: "#2e89ff",cursor: 'pointer'}}>
                Use companion mode
            </div>
        </div>  
    )
}

export default X3