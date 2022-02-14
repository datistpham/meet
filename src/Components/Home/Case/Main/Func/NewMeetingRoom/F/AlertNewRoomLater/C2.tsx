import { useStyles } from "./AlertNewRoomLater"
import { useTranslation } from "react-i18next"

const C2 = (props: any) => {
    const classes= useStyles()
    const { t }= useTranslation() 
    return (
        <div className={classes.c2}>
            {t("alert.title3")}
        </div>
    )
}

export default C2
