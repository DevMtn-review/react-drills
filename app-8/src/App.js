import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

export default function App() {
  useEffect(() => {axios.get('https://swapi.dev/api/people').then(res => {setCharacters(res.data.results)})});
  const [characters, setCharacters] = useState([]);
  return (
    <div className='app-8'>
      {characters.map((char, i) => {
        return(
        <div key={i} className='character'>
          <h2>Name: {char.name}</h2>
          <h2>Birth year: {char.birth_year}</h2>
          <h2>Height: {char.height}</h2>
          <h2>Eye color: {char.eye_color}</h2>
        </div>
        )})}
    </div>
  )
}
