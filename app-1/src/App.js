import React, {useState} from 'react';
import './App.css'

function App() {
  const [text, setText] = useState('');  
  return (
    <div className="app-1">
      <input onChange={e => setText(e.target.value)}/>
      <h4>{text}</h4>
    </div>
  );
}

export default App;
