import React from 'react'

const Color = ({length}) => {

  let colorStyle;

  if (length<=4){
    colorStyle = 'yellow';
  }
  else if ( length<=8){
    colorStyle = 'green';
  }
  else{
    colorStyle = 'red'
  }

  const divStyle = {
    width: '40px',
    height: '40px',
    backgroundColor: colorStyle
  }

  return (
    <div style={divStyle}>
      
    </div>
  )
}

export default Color
