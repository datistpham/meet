import { makeStyles } from '@mui/styles'
import { MyContext } from '../../../../Context/Context'
import { useContext } from 'react'
import Logged from './Logged/Logged'
import { lazy, Suspense } from 'react'
import { Animate } from 'react-simple-animate'
const Index = lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import("./NoLogin/Index")), 1000);
    });
  });
export const useStyles= makeStyles({
    account: {
        paddingLeft: 8
    },
    noLogin: {
        display: 'block',
        fontSize: 20, 
        fontWeight: 600,
        padding: 10,
        cursor: 'pointer',
        borderRadius: 4,
        '&:hover': {
            backgroundColor: "#f2f0f5"
        },
        transition: 'all .1s linear'
    },
    logged: {
        width: 48,
        height: 48,
        padding: 4
    },
    subLogged: {
        width: '100%', 
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        overflow: 'hidden',
        cursor: 'pointer',
        position: 'relative'
    },  
    loggedAvatar: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 32,
        height: 32,
        borderRadius: '50%',
        transition: 'all .2s linear',
        '&:active:hover': {
            border: '4px solid rgba(0,0,0,0.2)'
        }
        
    }
})

const Account = () => {
    const classes= useStyles()
    const { email, photoUrl }= useContext(MyContext)
    return (
        <div className={classes.account}>
            {
                email.length!== 0 ?
                <Animate
                    play
                    start={{ opacity: 0, filter: 'blur(10px)' }}
                    end={{ opacity: 1, filter: 'blur(0)' }}
                    duration={.3}
                >
                    <Logged photoUrl={photoUrl} />
                </Animate>
                :
                <Animate
                    play
                    start={{ opacity: 0, filter: 'blur(10px)' }}
                    end={{ opacity: 1, filter: 'blur(0)' }}
                    duration={.3}
                >
                    <Suspense fallback={<div style={{width: 32, height: 32}}></div>}>
                        <Index />  
                    </Suspense>
                </Animate>
            }
        </div>
    )
}

export default Account
