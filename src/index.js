import React, { Component } from "react";
import ReactDOM from "react-dom";
import { style } from "./styles";
import TodoListHeader from "./TodoListHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoListFooter from "./TodoListFooter";


const todos = ["Learn React", "Learn Redux", "Take Nap"]


class TodoListApp extends Component {
 render() {
   return (
     <div style={style}>
       <TodoListHeader />
       <TodoInput />
       <TodoList todoslist={todos}/>
       <TodoListFooter todoscount={todos.length} />
     </div>
   );
 }
}

ReactDOM.render(<TodoListApp />, document.getElementById("root"));