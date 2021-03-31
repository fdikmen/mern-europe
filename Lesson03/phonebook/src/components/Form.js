import React, { Component } from 'react'
import '../Form.css'

export default class Form extends Component {
    render() {
        return (
            <div className="formField">
                <form>
        <input name="name" id="name" placeholder="Enter a name ..."></input>
        <input name="phone" id="phone" placeholder="Enter a phone ..."></input>
        <button>Add</button>
                </form>
            </div>
        )
    }
}
