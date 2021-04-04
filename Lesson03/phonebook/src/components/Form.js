import React, { Component } from "react";
import "../Form.css";
import PropsTypes from 'prop-types'

export default class Form extends Component {
    static propTypes={
        addContact:PropsTypes.func
    }
  state = { text: "", phone: "" };
  onInputChange = (event) => {
    //console.log([event.target.name],event.target.name)
    // console.log(event.target.name,event.target.value);
   /*if (event.target.name==="text") {
    this.setState({text:event.target.value})
   } else if (event.target.name==="phone")  {       
    this.setState({phone:event.target.value})
   }*/
   this.setState({[event.target.name]:event.target.value})
   //console.log("Last State:",this.state)
  };
  sendForm=(e)=>{
      e.preventDefault()//Disable auto refreshing page
      //console.log("Form Submit Click...")
      if (this.state.text.length >0 && this.state.phone !=='')//If text/phone not blank
       {
        this.props.addContact({...this.state})
        this.setState({text:'',phone:''})//Form-State Clear
      } else {
          alert("Name or Phone not be blank!!!")
      }
  }
  render() {
    return (
      <div className="formField">
        <form onSubmit={this.sendForm}>
 <input onChange={this.onInputChange} value={this.state.text} name="text"
       id="text" placeholder="Enter a name ..." ></input>
          <input
            onChange={this.onInputChange}
            value={this.state.phone}
            name="phone"
            id="phone"
            placeholder="Enter a phone ..."
          ></input>
          <button>Add</button>
        </form>
      </div>
    );
  }
}
