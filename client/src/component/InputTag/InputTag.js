import React from 'react';
import './InputTag.css';

function InputTag(props){

    return (
        <input className="inputTag" id={props.id}
        name={props.name} type={props.type} required
        placeholder={props.placeholder} min={props.min}
        onChange={props.onChange}/>
    )
}

export default InputTag;