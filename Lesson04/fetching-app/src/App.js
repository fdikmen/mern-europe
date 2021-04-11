import './App.css';
import UserList from './UserList'
import About from './About'
import {BrowserRouter,Route,Link,NavLink,Redirect} from 'react-router-dom'
import { Component } from 'react';

const UserInfo = ({match})=>
{
  //console.log("UserInfo->" ,route)
  return <h1>User Info Page Name: {match.params.name} Age: {match.params.age}</h1>
}

const Profile = ()=>
{
  return <h1>Profile Page <br/> Welcome User!!!</h1>
}

class App extends Component {
  state={loggedIn:false}
  onClickButton = ()=>{
    this.setState({loggedIn:!this.state.loggedIn})
    //this.setState((prevState) => ({loggedIn:!prevState.loggedIn}))
    console.log(this.state.loggedIn)
  }
  render(){
    
    return(
      <BrowserRouter>
    <div className="App">
      <h1>App Comp.</h1>
    <Link to="/">Home</Link> <br/>
    <Link to="/Contact">Contact</Link> <br/>
    <Link to="/AboutPage/1">About-1</Link> <br/>
    <Link to="/AboutPage/22">About-22</Link> <br/>
    {/* <NavLink activeStyle={{color:'red'}} to="/AboutPage/333">About-333</NavLink> <br/> */}
    <NavLink activeClassName="activeClass" to="/AboutPage/333">About-333</NavLink> <br/>
    <NavLink activeClassName="activeClass"  to="/Users">User List</NavLink><br/>
    <NavLink activeClassName="activeClass"  to="/Profile">Profile</NavLink>   <br/>
<input type="button" onClick={this.onClickButton} 
value={this.state.loggedIn ? "Logout" : "Login"}></input>

      <Route path="/" exact={true} render={()=>{return <h1>Home Page</h1>}}/>
      <Route path="/Contact" exact strict render={()=>{return <h1>Contact Page</h1>}}/>
      <Route path='/AboutPage/:id' exact strict component={About}/>
      <Route path='/UserInfo/:name/:age' exact strict component={UserInfo}/>
      <Route path="/Users" exact strict component={UserList}/>
      <Route path="/Users2" exact> <UserList/> </Route>
      {/* <Route path="/Profile" exact strict component={Profile}/> */}
      <Route path="/Profile" exact strict render={
        ()=>{
          return this.state.loggedIn ? (<Profile/>) :<Redirect to="/"/>
        }
      }/>
      
    </div>
    </BrowserRouter>
    )
  }
}

export default App;
