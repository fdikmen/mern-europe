//rce
import React, { Component } from 'react'

export class ClassComponent extends Component {
    //rconst
    /*constructor(props) {
        super(props)    
        this.state = {
             counter:0,isVisable:true
        }
    }*/
    state = {counter:0,isVisable:true   }
    //this.setState({counter:2})
    increase = ()=>{
        this.setState(
            {counter:this.state.counter+1})
    }
//cdm
componentDidMount() {
    console.log("Class->componentDidMount runned.")
}
//cdup
componentDidUpdate(prevProps, prevState) {
    console.log("Class->componentDidUpdate runned.")
 }

    render() {
       /* console.log("Class Comp=>",
        this.state.counter)*/
        return (
            <div>
                <h1>Class Component</h1>
                <h2>{this.state.counter}</h2>
        <button onClick={this.increase}>Increase</button>
            </div>
        )
    }
}

export default ClassComponent
