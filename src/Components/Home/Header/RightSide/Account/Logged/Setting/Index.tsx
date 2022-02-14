import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useEffect, useRef, useState } from 'react';
// import { ConvertLocale } from '../../../../../../../docs/f/Convert_locale';
import { useTranslation } from 'react-i18next';

const Index= ()=> {
    const myRef= useRef<any>(null)
    const [show, setShow ]= useState<boolean>(()=> false)
    const handleClickOutSide= (e: Event)=> {
        if(myRef.current && !myRef.current.contains(e.target as Element)) {

            setShow(()=> false)
        }
    }
    const handleClickInside= (e: Event | any)=> {
        setShow((prev: boolean)=> !prev)
        e.stopPropagation()
    }
    useEffect(()=> {
        document.addEventListener("mousedown", handleClickOutSide)
        return ()=> document.removeEventListener("mousedown", handleClickOutSide)
    })
    return (
        <div ref={myRef} onClick={(e)=> handleClickInside(e)} className="_3209uwe" style={{width: 48, height: 48, display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', marginLeft: 20, borderRadius: '50%', position: 'relative'}}>
            <SettingsOutlinedIcon style={{color: "#5f6369"}} />
            {
                show=== true &&
                <Lang />
            }
        </div>
    )
}
const Lang= (props: any)=> {
    const { t, i18n }= useTranslation()
    const convertLocale= (lang: string)=> {
        i18n.changeLanguage(lang)   
    }
    return (
        <div className='_032ew' style={{position: 'absolute', right: 0, width: 300, borderRadius: 10, boxShadow: '0 5px 5px -3px rgb(0 0 0 / 20%), 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%)', boxSizing: 'border-box', padding: "10px 0", backgroundColor: '#fff', top: '100%'}}>
            <div style={{margin: "0 8px", fontWeight: 600, fontSize: 18, paddingBottom: 10, borderBottom: '1px solid #9a9fa3'}}>Language</div>
            <C actionF={()=> convertLocale("vi")} locale={`${t('content.lang1')}`} />
            <C actionF={()=> convertLocale("en")} locale={`${t('content.lang2')}`} />
        </div>
    )
}

const C= (props: any)=> {
    return (
        <div onClick={()=> props.actionF()} className='_03i2-e -q3wiqqw' style={{width: '100%', height: 48, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', fontSize: 16, fontWeight: 600, padding: "0 8px", boxSizing: 'border-box', borderRadius: "8px 8px 0 0"}}>
            {props.locale}
        </div>
    )
}

export default Index