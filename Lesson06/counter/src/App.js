import React,{useState} from 'react'
import './App.css';
import ClassComp from './ClassComponent'
import FuncComp from './FunctionalComponent'

function App() {
const [isEnableCComp, setIsEnableCComp] = useState(true)
const [isEnableFComp, setIsEnableFComp] = useState(true)
  
  const divStyleXYZ = {width:"49%",float:"left",height:"100vh",border:"0.5px solid red"}
  const bgLeft ={backgroundColor:"#e8cebf"}
  //camelCase
  return (
    <div className="App">
      <h1>{isEnableCComp ? "Class Component ON" : "Class Component OFF"}
      {isEnableFComp ? "Functional Component ON" : "Functional Component OFF"}
      </h1>
      <button onClick={()=>setIsEnableCComp(!isEnableCComp)}>Class Component Toggle</button>
      <button onClick={()=>setIsEnableFComp(!isEnableFComp)}>Function Component Toggle</button>
      <br/>
     {isEnableCComp? <div style={{...divStyleXYZ,...bgLeft}}><ClassComp/></div>:""}
      {isEnableFComp ? <div style={divStyleXYZ}><FuncComp/></div> : ""}
    </div>
  );
}

export default App;
