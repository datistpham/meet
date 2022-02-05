import React from 'react'
import date from 'date-and-time'

const CurrentHour = () => {
    const now= new Date()
    
    return (
        <div style={{paddingLeft: 4}}>
            <div>{date.format(now, "ddd, MMM DD")}</div>
        </div>
    )
}
export default React.memo(CurrentHour)
