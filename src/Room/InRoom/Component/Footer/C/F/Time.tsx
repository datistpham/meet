import CurrentDay from "../../../../../../Components/Home/Header/RightSide/CurrentTime/CurrentHour"
import { useStyles } from "../../../../Style/main_style"


const Time = (props: any) => {
    const classes = useStyles()
    return (
        <div className={`_3242 ${classes.indexFTime} ${classes.indexFSame}`}>
            <CurrentDay />
        </div>
    )
}

export default Time