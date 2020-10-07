import React from 'react';
import {withRouter} from 'react-router-dom';

function Button(props){

  const {path,history} = props;
  const style={
    padding:"0px 10px",
    height: "30px",
    backgroundColor: "rgb(78, 81, 241)",
    fontSize: "18px",
    fontWeight: "700",
    borderRadius: "20px",
  }

  return(
    <React.Fragment>
      <button
        onClick={()=> history.push(`${path}`)}
        style={style}
      >
        {props.children}
      </button>
    </React.Fragment>
  )

}


export default withRouter(Button);