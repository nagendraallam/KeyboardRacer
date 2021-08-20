import React, { useState,useEffect } from 'react'

export default function Timer() {
    const [timer,setTimer] = useState(0)
    
    useEffect(() => {
        const timeout = setTimeout(()=>{
            setTimer(timer=> timer+1)
        },1000)
        return () => {
            console.log("timer cleared")
            console.log(timer)
            clearTimeout(timeout)
        }
    },[timer])
    return (
        <div>
            Timer - {timer}
        </div>
    )
}
