import React from 'react'
import Color from './Color'

const Number = ({length}) => {

  return (
    <div>
      <p>Current name count {length}</p>
      <Color length = {length}></Color>          
    </div>
  )
}

export default Number
