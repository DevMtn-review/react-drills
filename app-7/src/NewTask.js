import React, { useState } from 'react'
import './App.css'

export default function NewTask(props) {
  const [entry, setEntry] = useState('');
  const addToTasks = () => {
    props.setList([...props.list, entry]);
    setEntry('');
  }
  return (
    <div className='app-6'>
      <input onChange={e => {setEntry(e.target.value)}} placeholder='Enter new task...' value={entry}/>
      <button onClick={addToTasks}>Add</button>
    </div>
  )
}
