import './App.css';
import ClassComp from './ClassComponent'
import FuncComp from './FunctionalComponent'

function App() {
  const divStyle = {width:"50%",float:"left",height:"100vh"}
  const bgLeft ={backgroundColor:"#e8cebf"}
  return (
    <div className="App">
      <div style={{...divStyle,...bgLeft}}><ClassComp/></div>
      <div style={divStyle}><FuncComp/></div>
    </div>
  );
}

export default App;
