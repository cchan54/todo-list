import React, { Component } from "react";
import { TodoItemStyle } from "./styles";


class TodoItem extends Component {
  render() {
    return (
      <div style={TodoItemStyle}>
       <li></li>
         <span>{this.props.item}</span>
          <button>Done</button>
          <button>Trash</button>
     </div>
    )
  }
 }

 export default TodoItem