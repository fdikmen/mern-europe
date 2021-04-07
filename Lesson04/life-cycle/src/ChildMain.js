//created by "RCC" snippet
import React, { Component } from 'react'
export default class ChildMain extends Component {
//created by "CDM" snippet
    componentDidMount() {console.log("Child ComponentDidMount runned.")}
//created by "RCO" snippet
constructor(props) {super(props)
    console.log("Child Constructor runned.")
}
//created by "CWM" snippet
componentWillMount() {console.log("Child componentWillMount runned.")}
 //created by "cwr" snippet
 componentWillReceiveProps(nextProps) {
    console.log("Child ComponentWillReceiveProps Runned.nextProps:",nextProps)
    }
//created by "SCU" snippet
shouldComponentUpdate(nextProps, nextState) {
    console.log("Child ShouldComponentUpdate Runned. nextProps:",nextProps
    ,"nextState:",nextState)
    if (nextState.number > 50) {
        return true;
    } else {
        return false;
    }
   
}
//created by "CWUP" snippet
componentWillUpdate(nextProps, nextState) {
    console.log("Child ComponentWillUpdate Runned. nextProps:",nextProps
    ,"nextState:",nextState)
}


state={number:0}
changeNumber=(event)=>{this.setState({number:event.target.value})}

    render() {
        console.log("Child render runned.")
        return (
            <div>
                ChildMain Comp...
                <h2>Props: {this.props.name}</h2>
                <input name="name" id="name" onChange={this.changeNumber}></input>
                <br/>Number: {this.state.number} /10= {this.state.number/10}
            </div>
        )
    }
}
