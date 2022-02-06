import { makeStyles } from '@mui/styles'
import Title1 from './Title1'
import Title2 from './Title2'

export const useStyles= makeStyles({
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4
  },
  title1: {
    width: 40,
    height: 40,
    display: 'flex', 
    justifyContent: 'center',
    alignItems: 'center'
  },
  title2: {
    fontSize: 24,
    color: '#5f6368',
    fontWeight: 600,
    cursor: 'pointer',
    textDecoration: "none"
  },
  imageTitle1: {
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    height: '100%'
  }
})

const TitleHeader = (props: any) => {
  const classes= useStyles()
  return (
    <div className={classes.title}>
        <Title1 />
        <Title2 />
    </div>
  )
}

export default TitleHeader
