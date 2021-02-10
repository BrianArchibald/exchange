import React, { Component } from 'react'

class MyClass extends Component {
  // clicked() {
  //   alert('Button clicked')
  // }
  render() {
    return(
      <div>
        <h1>Email is {this.props.email}</h1>
        // below was when function was in this class
        // <button onClick = {this.clicked}>Click</button>
        <button onClick = {this.props.myClick}>Click</button>
      </div>
    )
  }
}
export default MyClass;
