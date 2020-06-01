import React, { useState } from 'react'
import './App.css'

export default function App() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const login = () => {alert(`Username: ${user} Password: ${pass}`)}
  return (
    <div className='app-4'>
      <input onChange={e => setUser(e.target.value)}/>
      <input onChange={e => setPass(e.target.value)}/>
      <button onClick={login}>Login</button>
    </div>
  )
}
