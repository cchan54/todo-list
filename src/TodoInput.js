import React, { Component } from "react";
import { InputStyle } from "./styles";

class TodoInput extends Component {
  render() {
    return (
     <div style={InputStyle}>
       <input type="text" placeholder="Feed Dog"/>
       <p>(press "enter" to add)</p>
     </div>
    )
  }
 }

 export default TodoInput