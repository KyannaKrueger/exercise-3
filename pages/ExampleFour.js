import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState, useEffect } from "react"

export default function ExampleFour() {
    //number is a variable on the left side that is used to display or grab value from useState
    // number is  avariable on the left side that is used to display or grab value
    //setNumber is used to update the useState
const [number, setNumber] = useState(0); //initially starts as the number 0
const [color, setColor] = useState("gray"); // defaults to gray

const [trigger, setTrigger] = useState(false); // defaults as boolean false

const HandleChange = () => {
    if(number > 2) {
        setColor("orange");
    }
    console.log(number)
}

useEffect(() => {
    var interval;

    if(trigger) {
        interval = setInterval (() => {
            HandleChange();
            setTrigger(false);
        }, 3000)
    }

    console.log(number);
    console.log(trigger);

    return() => clearInterval(interval);
}, [trigger])

    return(
        <>
        <Header/>
        <main>
        <button onClick={() => {
            setNumber(number + 1)
            setTrigger(true)
        }}>Add Number</button>
        <h1 style={{color: color}}>Changing the text color</h1>

        {
                number > 1 && <div style={{
                    backgroundColor: `${color}`,
                    lineheight: 10,
                    padding: 20
                }}>
                    Box
                </div>
        }
        </main>
        </>
    )
}