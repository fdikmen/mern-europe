import './App.css';
  import {createStore,combineReducers} from 'redux'

function reducer(state,action)
{
  console.log("Paramater Action=>",action);
  if(action.type === 'changeTheState')
  {
    return action.payload.newState;
  }
  return "StateXYZ";}

function userReducer(state ='' ,action){
  return state;
}

function productReducer(state = [],action){
  return state;
}

const rootReducer = combineReducers({ userReducer,productReducer})

//const myStore = createStore(reducer);
const myStore = createStore(rootReducer,
  {
    userReducer:'Tommy',
    productReducer:[{name:'Sony',type:"Music Player"}]
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
console.log("(OLD)myStore.getState()=>",myStore.getState());

myStore.subscribe(()=>{
  ///alert("STORE CHANGED BRO!!!");
  //console.log("Store updated. New state=",myStore.getState());
})


const action = {type:'changeTheState',payload:{newState:'My new state'}}

myStore.dispatch(action);

//console.log("(NEW)myStore.getState()=>",myStore.getState());




function App() {
  return (
    <div className="App">
      APP COMP
    </div>
  );
}

export default App;
