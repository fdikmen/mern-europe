//CLASS COMPONENT = StateFull Comp.
//RCC
/*import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <h1>FOOTER COMPONENT</h1>
                { {this.props.name} }
            </div>
        )
    }
}*/


















/*import React from 'react'

export default function Footer(props) {
    return (
        <div>            
            <h1>FOOTER COMPONENT</h1>
        </div>
    )
}*/

//FUNCTION COMPONENT = STATELESS Comp.
//RFC ---> RAFC
import React from 'react'

const Footer = (props) => {
    return (
        <div>            
            <h1>FOOTER COMPONENT</h1>
            {/* {props.name} */}
        </div>
    )
}

export default Footer



