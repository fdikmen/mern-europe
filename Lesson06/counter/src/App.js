import React,{useState} from 'react'
import './App.css';
import ClassComp from './ClassComponent'
import FuncComp from './FunctionalComponent'

function App() {
const [showComponent, setShowComponent] = useState(true)
  
  const divStyleXYZ = {width:"49%",float:"left",height:"100vh",border:"0.5px solid red"}
  const bgLeft ={backgroundColor:"#e8cebf"}
  //camelCase
  return (
    <div className="App">
      <h1>{showComponent ? "Component ON" : "Component OFF"}</h1>
      <button onClick={()=>setShowComponent(!showComponent)}>Component Toggle</button>
      <br/>
     {showComponent? <div style={{...divStyleXYZ,...bgLeft}}><ClassComp/></div>:""}
      <div style={divStyleXYZ}><FuncComp/></div>
    </div>
  );
}

export default App;
