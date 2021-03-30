import React, { Component } from "react";
import "../Blog.css";
import BlogItem from "./BlogItem";

//class Blog extends React.Component {}
class Blog extends Component {
  
  clickButton()
  {
    console.log('Button Clicked. Bro!');
  } 
  render() {
    let blogText = "TEXT TEXT TEXT";
    const blogParaf =<h2>BLOG NOTES <button>BUTTON</button></h2>
    let nowNumber = 123;
    let blogInfos = [{textHead:"Blog 1",textDesc:"Blog 1 Description ...."},
    {textHead:"Blog 2",textDesc:"Blog 2 Description ...."},
    {textHead:"Blog 3",textDesc:"Blog 3 Description ...."}
  ,{textHead:"Blog 4",textDesc:"Blog 4 Description ...."}]
  const myStyle={color:"red",padding:"10px",backgroundColor:'Blue',fontFamily:"Arial"}
  const appClick=()=>{console.log('Shown from Blog Comp...')}
  return (

      <div className="blogTitle">
        <h1 style={myStyle}>BLOG COMPONENT</h1>
        <button onClick={this.clickButton}>ADD</button>        
        {/* <BlogItem title={blogInfos[0].textHead} description={blogInfos[0].textDesc}/>
        <BlogItem title={blogInfos[1].textHead} description={blogInfos[1].textDesc}/>
        <BlogItem title={blogInfos[2].textHead} description={blogInfos[2].textDesc}/>
        <BlogItem title={blogInfos[3].textHead} description={blogInfos[3].textDesc}/> */}
        
        {blogInfos.map((currentValue,index)=> 
        <BlogItem appClick={appClick} key={index} title={currentValue.textHead} description={currentValue.textDesc}/>)}


        <BlogItem title="Student" dataXYZ="new h3 text" newData={blogParaf} nowNmbr={nowNumber} blogMessage="Testing with PRPS" />
        <p>{blogText}</p>
        <label>{5 / 2 === 2.5 ? "YES" : "NO"}</label>
        {blogParaf}
        {5 + 6}
      </div>
    );
  }
}

export default Blog;
