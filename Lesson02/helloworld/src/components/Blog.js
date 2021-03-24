import React, { Component } from "react";
import "../Blog.css";
import BlogItem from "./BlogItem";

//class Blog extends React.Component {}
class Blog extends Component {
  render() {
    let blogText = "TEXT TEXT TEXT";
    const blogParaf =<h2>BLOG NOTES <button>BUTTON</button></h2>
    let nowNumber = 123;
    return (
      <div className="blogTitle">
        <h1>BLOG COMPONENT</h1>
        <BlogItem dataXYZ="new h3 text" newData={blogParaf} nowNmbr={nowNumber} blogMessage="Testing with PRPS" />
        <p>{blogText}</p>
        <label>{5 / 2 === 2.5 ? "YES" : "NO"}</label>
        {blogParaf}
        {5 + 6}
      </div>
    );
  }
}

export default Blog;
