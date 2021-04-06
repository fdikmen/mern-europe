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
    render() {
        console.log("Child render runned.")
        return (
            <div>
                ChildMain Comp...
            </div>
        )
    }
}
