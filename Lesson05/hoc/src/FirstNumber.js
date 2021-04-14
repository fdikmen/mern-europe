import React, { Component } from 'react'

export default class FirstNumber extends Component {
    render() {
        return (
            <div>
                <h1>FIRST</h1>
                <b>{this.props.firstNum}</b>
            </div>
        )
    }
}
