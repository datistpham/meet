import React from 'react'
import date from 'date-and-time'
import { useState } from 'react'
import { useEffect } from 'react'

const CurrentHour = () => {
    const [time, setTime]= useState(()=> new Date())
    useEffect(()=> {
        let timerId= setInterval( ()=> tick(), 360000)
        return function cleanup() {
            clearInterval(timerId)
        }
    })
    const tick= ()=> {
        setTime(new Date())
    }
    return (
        <div style={{paddingLeft: 4}}>
            <div>{date.format(time, "ddd, MMM DD")}</div>
        </div>
    )
}
export default React.memo(CurrentHour)
