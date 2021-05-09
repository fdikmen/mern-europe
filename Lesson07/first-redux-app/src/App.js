import './App.css';
import {connect} from 'react-redux'
import {updateUser,addUser,deleteUser} from './actions/userAction'

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
    </div>
  );
}

const mapStateToProps = state => 
{
  return state;
}

const mapDispatchToProps = {
  updateUser,addUser,deleteUser
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
