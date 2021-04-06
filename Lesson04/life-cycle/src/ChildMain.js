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
    console.log("ComponentWillReceiveProps Runned.nextProps:",nextProps)
    }
    render() {
        console.log("Child render runned.")
        return (
            <div>
                ChildMain Comp...
                <h2>Props: {this.props.name}</h2>
            </div>
        )
    }
}
