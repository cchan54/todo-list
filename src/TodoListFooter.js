import React, { Component } from "react";
import {TodoFooterStyle} from "./styles";
import PropTypes from "prop-types";

class TodoListFooter extends Component {
  render() {
    return (
     <div style={TodoFooterStyle}>
       <p>{this.props.todoscount}</p>
       <button>Clear Completed</button>
     </div>
    )
  }
 }

 TodoListFooter.propTypes = {
   todoCount: PropTypes.number.isRequired
 };

 export default TodoListFooter 