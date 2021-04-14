import React, { PureComponent } from 'react'

export default class SecondNumber extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (this.props.secondNum === nextProps.secondNum) {
    //         return false;
    //     }
    //     else {return true;}        
    //     //return nextProps.secondNum !== this.props.secondNum;
    // }
    
    
    render() {
        console.log("Second Comp. Run",this.props.secondNum)
        return (
            <div>
                <h1>Second</h1>
                <b>{this.props.secondNum}</b>
                
            </div>
        )
    }
}
