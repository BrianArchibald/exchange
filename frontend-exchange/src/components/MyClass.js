import React, { Component } from 'react'

class MyClass extends Component {
  clicked() {
    alert('Button clicked')
  }
  render() {
    return(
      <div>
        <h1>Email is {this.props.email}</h1>
        <button onClick= {this.clicked}>Click</button>
      </div>
    )
  }
}
export default MyClass;
