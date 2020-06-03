import React from 'react';
import './App.css';

export default function Image(props) {
  return (
    <div>
      <img src={props.imgSrc} alt='Bad request'/>
    </div>
  )
}
