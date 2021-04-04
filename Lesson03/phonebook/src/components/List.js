import React, { Component } from "react";
import "../List.css";
import PropsTypes from "prop-types";

export default class List extends Component {
  static propTypes = {
    contacts: PropsTypes.array.isRequired,
  };
  state={filterText:''}
  onChangeFilter=(e)=>{
      //console.log(e.target.value)
      this.setState({filterText:e.target.value})
      console.log(this.state)
  }
  render() {
      console.log("Render.")
      const filteredData = this.props.contacts.filter(
          item=>{
              return item.text.toLowerCase()
                                .indexOf(this.state.filterText.toLowerCase()) !==-1
                                ||
                                item.phone.toLowerCase()
                                .indexOf(this.state.filterText.toLowerCase()) !==-1
          }      )
    return (
      <div className="listCompField">
        <input
        value={this.state.filterText}
        onChange={this.onChangeFilter}
          name="filter"
          id="filter"
          placeholder="Filter by name or phone..."
        ></input>
        <ul>
          {filteredData.map((item,index) => {
            return (
              <li key={index}>
                <span className="name">{item.text}</span>
                <span className="phone">{item.phone}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
