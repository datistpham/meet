import { useStyles } from "../../../../../MakeStyles/MakeStyles"
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'

const Cp1=(props: any)=> {
    const classes= useStyles()
    return (
        <div className={classes.cp1}>
            <InventoryOutlinedIcon color="primary" fontSize="small"  />
        </div>
    )
}

export default Cp1