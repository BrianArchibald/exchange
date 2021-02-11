import React from 'react'

function Hello(props) {
  function ClickMe() {
    alert('Button clicked')
  }
  return(
    <div>
      <h2>{props.name}</h2>
    <button className="btn btn-secondary" onClick={ClickMe}>Click</button>
    </div>
  )
}

export default Hello;
