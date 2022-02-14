import { useStyles } from "../Index"
import { useTranslation } from "react-i18next"

const Title1 = () => {
    const classes= useStyles()
    const { t }= useTranslation()
    return (
        <div className={`_6300 ${classes.title1}`}>
            {t("header.title1")}
        </div>
    )
}

export default Title1
