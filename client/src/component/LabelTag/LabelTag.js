import React from 'react';

function LabelTag(props){
  const style = {
    display: 'inline',
    fontSize: '1.3rem',
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  }

  return(
    <label style={style} htmlFor={props.for}>
      {props.children}
    </label>
  )
}

export default LabelTag;