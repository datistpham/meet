import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import ContainerC21 from "./ContainerC2_1/ContainerC21"
import ContainerC22 from "./ContainerC2_2/ContainerC22"
const ContainerC2= (props: any)=> {
    const classes= useStyles()
    const setListUser= ()=> {
        
    }
    return (
        <div className={`_6400 ${classes.containerC2}`}>
            <ContainerC21 />
            <ContainerC22 />
        </div>
    )
}

export default ContainerC2