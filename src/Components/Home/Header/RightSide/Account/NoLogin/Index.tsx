import { useStyles } from '../Account'
import { HandleLogin } from './HandleLogin'

const Index = () => {
    const classes= useStyles()
    return (
        <div onClick={()=> HandleLogin()} className={classes.noLogin}>
            Login
        </div>
    )
}

export default Index
