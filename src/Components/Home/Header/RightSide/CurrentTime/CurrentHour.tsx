import React from 'react'
import date from 'date-and-time'
import { useEffect, useState } from 'react'

const CurrentDay = () => {
    const [time, setTime]= useState(()=> new Date())
    useEffect(()=> {
        let timerId= setInterval( ()=> tick(), 60000)
        return function cleanup() {
            clearInterval(timerId)
        }
    })
    const tick= ()=> {
        setTime(new Date())
    }
    return (
        <div style={{paddingRight: 4}}>
            {date.format(time, "HH:mm")}
        </div>
    )
}

export default CurrentDay
