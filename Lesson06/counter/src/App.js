import './App.css';
import ClassComp from './ClassComponent'
import FuncComp from './FunctionalComponent'

function App() {
  const divStyleXYZ = {width:"50%",float:"left",height:"100vh"}
  const bgLeft ={backgroundColor:"#e8cebf"}
  //camelCase
  return (
    <div className="App">
      <div style={{...divStyleXYZ,...bgLeft}}><ClassComp/></div>
      <div style={divStyleXYZ}><FuncComp/></div>
    </div>
  );
}

export default App;
