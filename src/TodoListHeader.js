import React, { Component } from "react";
import { HeaderStyle } from "./styles";



class TodoListHeader extends Component {
  render() {
    return (
     <header style={HeaderStyle}>
       <h1>{this.props.title}</h1>
     </header>
    );
  }
 }

 TodoListHeader.defaultProps = {
  title: "So Much To Do!"
};

 export default TodoListHeader