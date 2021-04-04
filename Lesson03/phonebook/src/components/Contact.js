import React, { Component } from 'react'
import Form from './Form'
import List from './List'

export default class Contact extends Component {
    state={
        contacts:[{text:"Name 1",phone:"+1234567890"},
        {text:"Name 2",phone:"+1234567891"},
        {text:"Name 3",phone:"+1234567892"},
        {text:"Name 4",phone:"+1234567893"}]
    }
    addContact=(datas)=>{
        const {contacts}=this.state;
        contacts.push(datas)
        this.setState({contacts})
        //console.log("Contact.js:",datas);
    }
    render() {
        return (
            <div>
                Phone Book App
                <List contacts={this.state.contacts}/>
                <Form addContact={this.addContact}/>
            </div>
        )
    }
}
