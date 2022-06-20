import { useState } from "react"

export default function Header(){
    
    const [state, setState] = useState(0)
    const [count, setCount] = useState(0)
    
    const style = {
        color: 'white',
        fontSize: 20,
        margin: '5px',
        borderRadius: '5px',
        background:'black'
      };
      
    return(
        <div>
        <p >How many times{count}</p>
        <p >Clicked {state} times</p>
        <button style={style} onClick={() => {setState(state + 1); setCount(count +1)} }>
          Plius
        </button>
        <button style={style} onClick={() => {setState(state - 1); setCount(count +1)}}>
          Minus
        </button>
        <button style={style}onClick={() => {setState(state * 2); setCount(count +1)}}>
          Daugyba is 2
        </button>
        <button style={style}onClick={() => {setState(state / 2); setCount(count +1)}}>
          Dalyba is 2
        </button>
        <button style={style}onClick={() => {setState(state * 0); setCount(count +1)}}>
          nunulint
        </button>


        
        
      </div>
    )
}