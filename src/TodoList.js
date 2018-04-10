import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return (
     <ul>
       {this.props.todoslist.map((item, i) => { 
       return <TodoItem key={i} item={item} />;
       })}
     </ul>
    )
  }
 }

 export default TodoList