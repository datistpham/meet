import { useStyles } from "../AlertNewRoomLater"
import { useTranslation } from "react-i18next"

const C1A = (props: any) => {
    const classes= useStyles()
    const { t }= useTranslation()
    return (
        <div className={classes.c1_}>
            {t("alert.title2")}
        </div>
    )
}

export default C1A
