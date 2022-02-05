import React from 'react'
import { makeStyles } from '@mui/styles'
import CurrentHour from './CurrentDay'
import CurrentDay from './CurrentHour'
import Separate from './Separate'

const useStyles= makeStyles({
    currentTime: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 18
    }
})
const CurrentTime = () => {
    const classes= useStyles()
    return (
        <div className={classes.currentTime}>
            <CurrentDay />
            <Separate />
            <CurrentHour />
        </div>
    )
}

export default CurrentTime
