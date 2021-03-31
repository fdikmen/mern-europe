import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    //BIND-1(In Constructor):this.clickButton=this.clickButton.bind(this)
   // this.state={name:"Tommy"}
}
state={name:"Tommy",age:12,address:"Newyork"}
  /*clickButton() {
    console.log("Click in Header.js");
    this.props.appjsClick("123");
  }*/
  //BIND-3 (Define Arrow Func.)
  clickButton=()=> {
    console.log("Click in Header.js");
    this.props.appjsClick("123");
    this.setState({name:"New Tommy"})
  
  }
  changeState=()=>{
    this.setState({name:"Changed Tommy " + Math.floor(Math.random()*4)})
  }
  render() {
    //console.log(this.props);
    //console.log(this.state);
    return (
      <div>
        <h1>Header Comp.</h1>        
        <h3>{this.state.age}</h3>
        <h2>{this.state.name}</h2>
        {/* BIND-2 In JSX */}
        {/* <button onClick={()=>this.clickButton()}>Add</button> */}
        <button onClick={this.clickButton}>Add</button>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
