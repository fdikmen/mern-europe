//created by rcc
import React, { Component } from 'react'
import ChildMain from './ChildMain'

export default class Main extends Component {
    //created by "rco"
    constructor(props) {
        super(props)
    console.log("I.Constructor Runned.")
    //console.log("Props=>",this.props)
    //this.state={name:"Okan"}
    }
    state={name:"Okan"}

    //created by "cwm"
componentWillMount() {console.log("II.ComponentWillMount Runned.")    }
    //created by "cdm"
    componentDidMount() {
        console.log("IV.ComponentDidMount Runned.")
        /*setTimeout(() => {
            this.setState({name:"Tommy"})
        }, 3000);*/
    }
   changePropsVal = ()=>{
    this.setState({name:"Tommy New"})
   }
    
    render() {
        console.log("III.Render Runned.")
        return (
            <div>
                Main Comp...<br/>
                <b>State: {this.state.name}</b>                
                <ChildMain name={this.state.name}/>
                <button onClick={this.changePropsVal}>Change Props</button>
            </div>
        )
    }
}
