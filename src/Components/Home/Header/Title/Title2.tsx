import React from 'react'
import { useStyles } from './Title'


const Title2 = () => {
  const classes= useStyles()
  return (
    <div >
        <a href='http://localhost:3000/' className={classes.title2} >Meet</a>
    </div>
  )
}

export default Title2
