import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {rootReducer} from './reducers/rootReducer'
function reducer(state,action)
{
  console.log("Paramater Action=>",action);
  if(action.type === 'changeTheState')
  {
    return action.payload.newState;
  }
  return "StateXYZ";}
  
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
const actionUser={type:"userUpdate",payload:{user:'Emma'}}
myStore.dispatch(actionUser)

//REMOVE PROVIDER, LATER AGAIN ADDED.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}> <App /> </Provider>   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
