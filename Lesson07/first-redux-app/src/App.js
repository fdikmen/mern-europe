import './App.css';
import {connect} from 'react-redux'
import {updateUser,addUser,deleteUser,getUser} from './actions/userAction'

function App(props) {
  console.log("APP PROPS:",props)
  return (
    <div className="App">
      APP COMP
      <hr/>
      {props.userReducer}
      <br/>
      <button onClick={()=>props.updateUser("Tommy New")}>Change User</button>
      <button onClick={()=>props.addUser("Emma")}>Add User</button>
      <button onClick={()=>props.deleteUser()}>Delete User</button>
      <button onClick={()=>props.getUser(1)}>GET User From API</button>
    </div>
  );
}

const mapStateToProps = state => 
{
  return state;
}

const mapDispatchToProps = {
  updateUser,addUser,deleteUser,getUser
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
/*
const mergeProps = (propsFromState,propsFromDispatch,propsFromParentComp) =>
{
  console.log("-----------------------------------");
  console.log("propsFromState : ",propsFromState);
  console.log("propsFromDispatch : ",propsFromDispatch);
  console.log("propsFromParentComp (ownProps) :",propsFromParentComp);
  console.log("-----------------------------------");
  return {}

}

export default connect(mapStateToProps,mapDispatchToProps,mergeProps)(App);
*/
