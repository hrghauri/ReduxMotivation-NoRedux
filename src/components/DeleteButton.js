import React from 'react'

const DeleteButton = ({id, removeNameFromApp}) => {
  return (
    <div>
      <button onClick={()=>removeNameFromApp(id)}>Delete</button>
    </div>
  )
}

export default DeleteButton
