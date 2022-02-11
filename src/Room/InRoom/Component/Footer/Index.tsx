import { useStyles } from "../../Style/main_style"
import IndexF from "./C/F/Def/Index"
import IndexS from "./C/S/Def/Index"
import IndexT from "./C/T/Def/Index"

const FooterIndex= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={`${classes.footerIndex} _3904`} >
            <IndexF />
            <IndexS />
            <IndexT />
        </div>
    )
}

export default FooterIndex