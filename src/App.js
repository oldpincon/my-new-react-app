import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function app () {
  const[number,setNumber] = useState(0)
  return(
    <div className='app'>
      <header className='app-header'>
        <div>{number}</div>
        <button onClick={()=>{setNumber(number+1)}}>加一</button>
        <button onClick={()=>{setNumber(number-1)}}>減一</button>
      </header>
    </div>
  );
}

export default app;