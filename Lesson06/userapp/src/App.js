import "./App.css";
import UserList from "./UserList";
import React,{useState} from 'react'
import {UserContext} from './context/UserContext'

const data = [
  {id: 1,name: "Tommy",email: "tommy@tom.com",age: 25,color: "lightcyan"},
  { id: 2, name: "Emmy", email: "emy@tom.com", age: 35, color: "honeydew" },
  { id: 3, name: "Lisa", email: "lisa@tom.com", age: 45, color: "red" },
];

function App() {
  const [users, setUsers] = useState(data);
//obj1 - obj2 -----> obj3 = {...obj1,...obj2}
  const changeColor = (_id,_color) => 
                              setUsers(users.map(item=>item.id === _id 
                                                              ? {...item,color:_color}
                                                              :item))


  return (
   <UserContext.Provider value={{changeColor,users}}>
      <div className="App">
      <h1>Welcome!</h1>
      {/* <UserList users={users} changeColor={changeColor}/> */}
      <UserList/>
    </div>
   </UserContext.Provider>
  );
}

export default App;
