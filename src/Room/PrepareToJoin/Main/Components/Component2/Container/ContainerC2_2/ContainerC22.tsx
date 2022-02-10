import { useStyles } from "../../../../../../MakeStyles/MakeStyles"
import DevicesOutlinedIcon from '@mui/icons-material/DevicesOutlined';
import X1 from "./X/X1"
import X2 from "./X/X2"
import X3 from "./X/X3"

const ContainerC22= (props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.containerC22}>
            <X1 />
            <X2 />
            <X3 icon={<DevicesOutlinedIcon style={{color: "#2e89ff"}} />} /> 
        </div>
    )
}

export default ContainerC22