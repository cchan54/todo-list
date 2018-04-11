import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.todoslist.map((item, i) => { 
          return <TodoItem key={i} item={item} />;
          })}
        </ul>
      </div>
    )
  }
 }

 export default TodoList