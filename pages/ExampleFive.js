import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFive() {

    //set up counter that increases by 1 every second, make sure it displays on screen, no button is needed

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);
        }, 1000)
    
        return () => clearInterval(interval);
    }, [count])
    

    return(
        <>
        <div>
            <h1>Number Counter</h1>
            <h3>Example using</h3>
            <div>{count}</div>
        </div>
        </>
    )
}