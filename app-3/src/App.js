import React, { useState } from 'react'
import './App.css'

export default function App() {
  const arr = ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'];
  const [inputState, setInputState] = useState('');
  const filteredArray = arr.filter(food => {return(food.includes(inputState))})
  return (
    <div className='app-3'>
      <input onChange={e => {setInputState(e.target.value)}}/>
      {inputState !== '' ? 
      <div className='found-array'>
        {filteredArray.map((word, i) => <h4 key={i}>{word}</h4>)}
      </div>
      :
      null
      }
    </div>
  )
}
