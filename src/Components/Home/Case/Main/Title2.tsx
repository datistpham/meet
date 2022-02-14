import { useStyles } from "../Index"
import { useTranslation } from "react-i18next"

const Title2 = () => {
    const classes= useStyles()
    const { t }= useTranslation()

    return (
        <div className={`${classes.title2} _3600`}>
            {t("header.title2")}
        </div>
    )
}

export default Title2
