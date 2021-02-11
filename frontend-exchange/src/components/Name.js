import React, { Component } from 'react'

class Name extends Component {
  constructor() {
    super()
    this.state = {
      name: "Brian"
    }
  }

  clikedMe = () => {
    this.setState({
      // name: "Changed"
      name:this.state.name === "Brian" ? "Brian2" : "notBrian"
    })
  }

  render() {
    return(
      <div>
      <h1>{this.state.name}</h1>
      <button onClick = { this.clickedMe() } className="btn btn-success">Change Text</button>
      </div>
    )
  }
}

export default Name
