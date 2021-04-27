import "./App.css";
import React,{useRef,useEffect} from 'react'
import ReducerComp from './ReducerComp'
import People from './People'
function App() {
const inputRef =useRef();
const divRef = useRef();
const btn1Ref = useRef();
const data = useRef(178);

const onFocusBtn =()=>{inputRef.current.focus();}
const onDivBorderBtn = ()=>{divRef.current.style.border = "1px solid red";}
const onViewInputValueBtn = () => {alert(inputRef.current.value)}
//ComponentDidMount (useEffect(() =>{})) -------> Once When Create
useEffect(() =>{
  /*console.log("inputRef->",inputRef);
  console.log("inputRef.current->",inputRef.current);
  console.log("divRef->",divRef);
  console.log("divRef.current->",divRef.current);
  console.log("btn1Ref->",btn1Ref);
  console.log("btn1Ref.current->",btn1Ref.current);
  console.log("data->",data);*/
})

  return (
      <div ref={divRef} className="App">
      <h1>Welcome!</h1>
      <input ref={inputRef} placeholder="Enter text..."></input>
      <button onClick={onFocusBtn}>Focus Button</button>
      <button onClick={onDivBorderBtn}>Div Border Button</button>
      <button ref={btn1Ref} onClick={onViewInputValueBtn}>View Input Value Button</button>
    <br/>
    <ReducerComp/>
    <hr/>
    <People/>
    </div>
  );
}

export default App;
