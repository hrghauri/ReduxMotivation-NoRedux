import React from 'react'
import DeleteButton from './DeleteButton'

const Name = ({name, removeNameFromApp, id}) => {
  return (
    <div>
      <p>{name}</p>
      <DeleteButton removeNameFromApp = {removeNameFromApp} id ={id}></DeleteButton>
    </div>
  )
}

export default Name
