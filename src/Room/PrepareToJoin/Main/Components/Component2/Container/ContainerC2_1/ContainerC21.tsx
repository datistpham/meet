import { useStyles } from "../../../../../../MakeStyles/MakeStyles"
import PeopleJoinSummary from "./PeopleJoinSummary"
import { useTranslation } from "react-i18next"

const ContainerC21= (props: any)=> {
    const classes= useStyles()
    const { t, i18n }= useTranslation()
    const changeLanguageHandler =()=> {
        i18n.changeLanguage("vi")
    }
    return (
        <div className={classes.containerC21} style={{height: (props.allUserA=== undefined || props.allUserA.length=== 0) ? 80 : (props.allUserA.length===1 ? 104 : 120)}}>
            <div onClick={()=> changeLanguageHandler()} className="_39043" style={{fontSize: 28, fontWeight: 600, height: 36, width: '100%', textAlign: 'center'}}>
                Ready joining ? 
            </div>
            <div>
                {t('content.functional')}
            </div>
            <PeopleJoinSummary allUserA={props.allUserA} />
        </div>
    )
}

export default ContainerC21