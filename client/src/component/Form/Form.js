import React from 'react';

function Form(props){

  const styleForm = {
    backgroundColor: "rgb(127,130,255)",
    borderRadius: "10px",
    width: "850px",
    padding: "20px 30px",
  }

  return(
    <form style={styleForm} id={props.id} onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}


export default Form;