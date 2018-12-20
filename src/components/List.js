import React from 'react'
import Name from './Name'

const List = ({names, removeNameFromApp}) => {

 const namesItems = names.map((name, index)=>
     (
           <Name removeNameFromApp={removeNameFromApp} key= {index} id = {index} name ={name}></Name> 
     )
 )


  return (
      <div>
    {namesItems}
    </div>
  )
}

export default List
