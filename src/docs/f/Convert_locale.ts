import { useTranslation } from "react-i18next"

const ConvertLocale= (lang: string): void=> {
    const { i18n }= useTranslation()
    i18n.changeLanguage(lang)
    return 
}

export { ConvertLocale }