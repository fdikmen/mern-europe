//rce
import React, { Component } from 'react'

export class ClassComponent extends Component {
    //rconst
    /*constructor(props) {
        super(props)    
        this.state = {
             counter:0,isVisable:false
        }
    }*/
    state = {counter:0,isVisable:false,timer:0   }
    //this.setState({counter:2})
    increase = ()=>{
        this.setState(
            {counter:this.state.counter+1})
    }
//cdm
componentDidMount() {
    //console.log("Class->componentDidMount runned.")
    this.myTimer = setInterval(() => {
        this.setState({timer:this.state.timer+1})
    }, 1000);
}
//cdup
componentDidUpdate(prevProps, prevState) {
    //console.log("Class->componentDidUpdate runned.")
//console.log("Timer: ",this.state.timer) 
}
//cwun
componentWillUnmount() {
    console.log("componentWillUnmount runned.")
    clearInterval(this.myTimer)
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
