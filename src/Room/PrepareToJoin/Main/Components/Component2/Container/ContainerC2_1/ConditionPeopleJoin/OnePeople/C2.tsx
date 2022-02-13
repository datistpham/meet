import { Fragment } from "react"
import { nanoid } from "nanoid"
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import { useEffect } from "react"

const C2= (props: any)=> {
    const [uchi, setUchi]= useState<any>(()=> "")
    useEffect(()=> {
        setUchi(()=> (`_${props.allUserA!.length}aq-32i9`))
    }, [props.allUserA])
    const useStyles= makeStyles({
        uchi: {

        }
    })
    const css= `
        .${uchi} {
            display: none 
        }
    `
    const classes= useStyles()
    
    return (
        <div className="-4304ds" style={{margin: "8px 8px 0 8px", textAlign: 'center'}}>
            <style>
                {css}
            </style>
            {
                props.allUserA!== undefined &&
                (
                props.allUserA.length===1 && 
                props.allUserA.map((item: any)=> <div key={nanoid()} className="_9remsew" style={{fontSize: 14, fontWeight: 600}}>{item.userName} is joing this meeting room</div>))
            }
            {
                props.allUserA!== undefined &&
                (
                    props.allUserA.length=== 2 &&
                <div className="_023u-29" style={{display: 'flex', justifyContent: 'center',alignItems: 'center', textAlign: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        props.allUserA.map((item: any, key: number)=> <Fragment key={nanoid()}><div className={`${classes.uchi} _wef-332i9`} style={{fontSize: 14, fontWeight: 600}}>{item.userName}</div><div className={`_${key+1}aq-32i9 _9remsew`} style={{fontSize: 14, fontWeight: 600}}>&nbsp;and&nbsp;</div></Fragment>)
                    }
                    <P1 />
                </div>)
            }
            {
                props.allUserA!== undefined &&
                (
                    (props.allUserA.length> 2 && props.allUserA.length<=4) &&
                <div className="_023u-29" style={{display: 'flex', justifyContent: 'center',alignItems: 'center', textAlign: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {
                        props.allUserA.map((item: any, key: number)=> <Fragment key={nanoid()}><div className={`${classes.uchi} _wef-332i9`} style={{fontSize: 14, fontWeight: 600}}>{item.userName}</div><div className={`_${key+1}aq-32i9 _9remsew`} style={{fontSize: 14, fontWeight: 600}}>,</div></Fragment>)
                    }
                    <P1 />
                </div>)
            }
        </div>
    )
}

const P1= ()=> {
    return (
        <div className="_93ikw-94iwk" style={{fontSize: 14, fontWeight: 600, marginTop: 6}}>&nbsp;are joining this meeting room</div>
    )
}

export default C2