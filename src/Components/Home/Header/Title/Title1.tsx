import React from 'react'
import { useStyles } from './Title'
import favicon from '../../../../Assert/favicon.png'

const Title1 = () => {
  const classes= useStyles()
  return (
    <div className={classes.title1}>
        <img src={favicon} alt="open" className={classes.imageTitle1} />
    </div>
  )
}

export default Title1
