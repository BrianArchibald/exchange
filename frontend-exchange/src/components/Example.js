import React from 'react'

function Example(props) {

  function myElement(names) {
    return names.map(name =>

      <div>
      {`${name}`}
      </div>

    )
  }

  return(
    <div>
    <h3>{myElement.props.name}</h3>

    </div>
  )
}

export default Example
