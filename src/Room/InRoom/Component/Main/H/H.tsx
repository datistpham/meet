import { useEffect, useMemo, useCallback, useContext } from "react"
import { ContextT } from "../../T"

const H= ()=> {
    const { stream1 }= useContext(ContextT)
    const audioContext= new AudioContext()
    const analyser= audioContext.createAnalyser()
    analyser.fftSize= 1024
    const frequencyArray = useMemo(()=> new Uint8Array(analyser.frequencyBinCount), [analyser.frequencyBinCount]) 
    const audioStream= audioContext.createMediaStreamSource(stream1)
    audioStream.connect(analyser)
    const myInterval= useCallback(()=> setInterval(()=> {
        analyser.getByteFrequencyData(frequencyArray)
        const arraySum = frequencyArray.reduce((a, value) => a + value, 0)
        const average = arraySum / frequencyArray.length
        // console.log(average)
    }, 500), [analyser, frequencyArray])
    const measureVolume= useCallback(()=> {
        myInterval()
    }, [myInterval])
    useEffect(()=> {
        measureVolume()
        return ()=> clearInterval(myInterval())
    }, [measureVolume, myInterval])
    return (
        <div style={{display: 'none'}}>
            
        </div>
    )
}

export default H