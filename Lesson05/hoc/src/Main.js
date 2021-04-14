import React, { Component } from 'react'
import axios from 'axios'
import Post from './Posts'
import User from './Users'
import FirstNumber from './FirstNumber'
import SecondNumber from './SecondNumber'

export default class Main extends Component {
    state={
        posts:[],
        users:[],
        loading:true,
        firstNum:Math.random(),
        secondNum:Math.random()}

    componentWillMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(k=>k.data)
        .then(result=>{
            setTimeout(() => {
                this.setState({posts:result,loading:false})
            }, 5000);
        })
        
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(k=>k.data)
        .then(result=>{
            setTimeout(() => {
                this.setState({users:result,loading:false})
            }, 2000);
        })
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({firstNum:Math.random(),secondNum:Math.floor(Math.random()*2)})
        }, 1000);
    }
    

    render() {
        //console.log(this.state.posts);
        return (
            <div>
                Main Comp...
                {/* {this.state.loading === true ? "Loading ...." : "Data is here..."} */}
            {/* <Post posts={this.state.posts} loading={this.state.loading}/> */}
            {/* OR */}
            <FirstNumber firstNum={this.state.firstNum}/>
            <SecondNumber secondNum={this.state.secondNum}/>
            <Post {...this.state}/>
            <User {...this.state}/>
            </div>
        )
    }
}
