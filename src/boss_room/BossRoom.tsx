import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { nanoid } from "nanoid"
const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))


const BossRoom = ()=> {
    const { roomID }= useParams()
    const navigate= useNavigate()
    useEffect(()=> {
        const directF= async ()=> {
            await sleep(500)
            navigate(`/${roomID}`, { replace: true, state: {bossRoom:  nanoid()} })
        }
        directF()
    }, [roomID, navigate])
    return (
        <div style={{width: '100%', height: '100%', backgroundColor: "#202124", display: 'flex', justifyContent: 'center',alignItems: 'center', fontSize: 24, color: "#fff", fontWeight: 600}}>
            Joining
        </div>
    )
}


export default BossRoom