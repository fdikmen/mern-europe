//rfce 
import React,{useState,useEffect} from 'react'

function FunctionalComponent() {
const [counter,setCounter]=useState(0)
const [counter2,setCounter2]=useState(0)
const [isVisable,addIsVis]=useState(false)

const increase = ()=>{
    setCounter(counter+1)
}
const increase2 = ()=>{
    setCounter2(counter2+1)
}
const changeVisable =()=>{
    addIsVis(!isVisable)
}
useEffect(
    ()=>{console.log("Func.->useEffect")}
    ,[counter,counter2]
);

//console.log("Func. Comp.=>",counter)
    return (
        <div>
            <h1>Functional Component</h1>
            <h2>I:{counter}</h2>            
            <h2>II:{counter2}</h2>            
            <button onClick={increase}>Increase</button>
        <button onClick={increase2}>Increase2</button>
        <h3>III:{isVisable?"True":"False"}</h3>
        <button onClick={changeVisable}>changeVisable</button>
        
        </div>
    )
}

export default FunctionalComponent
