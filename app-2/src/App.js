import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [arr, setArr] = useState(['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']);
  return (
    <div className='app-2'>
        {arr.map(e => <h2>{e}</h2>)}
    </div>
  )
}
