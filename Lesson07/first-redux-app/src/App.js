import './App.css';
  import {createStore} from 'redux'

function reducer(state,action)
{
  console.log("Paramater Action=>",action);
  if(action.type === 'changeTheState')
  {
    return action.payload.newState;
  }
  else if(action.type === 'deposit'){
    return action.payload;
  }
  return "StateXYZ";}

const myStore = createStore(reducer);
console.log("(OLD)myStore.getState()=>",myStore.getState());

const action = {type:'changeTheState',payload:{newState:'My new state'}}
const actionDeposit = {type:'deposit',payload:10}

myStore.dispatch(action);
console.log("(NEW)myStore.getState()=>",myStore.getState());
myStore.dispatch(actionDeposit);
console.log("(NEW)myStore.getState()=>",myStore.getState());

function App() {
  return (
    <div className="App">
      APP COMP
    </div>
  );
}

export default App;
