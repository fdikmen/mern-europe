//CREATE WITH rcc SNIPPET
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class BlogItem extends Component {
    constructor(props){
        super(props);
       // console.log(props)
       // console.log(this.props)      
      }
  /**
   * user={}
   * user={age:12}
   * user={name:"Tommy",age:12}
   */
  
    static propTypes = {
    title: PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    description: PropTypes.string,
    blogMessage:PropTypes.string,
    nowNmbr:PropTypes.any,
    dataXYZ:PropTypes.string
   // user:PropTypes.shape({name:PropTypes.string,age:PropTypes.number.isRequired}).isRequired
  };

  //Default Props
  static defaultProps = {description:"One Desc",title:"One Title"}
clickItem()
{
    console.log('Button clicked from BlogItem Comp.');
    //this.props.appClick();
}

  render() {
    console.log(this.props);
    const { blogMessage, nowNmbr } = this.props;
    return (
      <div>
        <button>Click To Item</button>
        <h3>{this.props.dataXYZ}</h3>
        {/* <h4>{this.props.blogMessage}</h4>
                <h4>{this.props.nowNmbr}</h4> */}
        <h4>{blogMessage}</h4>
        <h4>{nowNmbr}</h4>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}