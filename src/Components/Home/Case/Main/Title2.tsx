import { useStyles } from "../Index"

const Title2 = () => {
    const classes= useStyles()
    return (
        <div className={`${classes.title2} _3600`}>
            We've redesigned Meet — our highly secure business meeting service — to make it available to everyone at no cost.
        </div>
    )
}

export default Title2
