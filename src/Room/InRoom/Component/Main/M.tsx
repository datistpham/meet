// import { useContext } from "react"
// import { Video } from "../../../Index"
import { useStyles } from "../../Style/main_style"
// import { ContextT } from "../T"

const M= (props: any)=> {
    const classes= useStyles()
    // const { peers, myRef }= useContext(ContextT)
    return (
        <div className={classes.mainIndex}>
            {/* {peers.map((peer: any, index: any) => {
                return (
                    <Video key={index} peer={peer} />
                )
            })} */}
            {/* <video ref={myRef} autoPlay muted playsInline style={{width: 400, height: 500}} /> */}
        </div>
    )
}

export default M