import { useRef } from "react";
import React from 'react';
import './App.css';

function App() {
  const inputRef = useRef();
  const inputRef2 = useRef();
  const focusInput = () => 
  {inputRef.current.focus();
   inputRef.current.style.width = "300px";
  }
  const focusInput2 = () => 
  {inputRef2.current.focus();
   inputRef2.current.style.width = "300px";
  }

  return (
    <div className="App">
      <h2> The use of useRef </h2>
      <input type="text" style= {{width:"100px"}} ref={inputRef} />
      <input type="text" style= {{width:"100px"}} ref={inputRef2}/>
      <button onClick={focusInput}> Focus 1 </button>
      <button onClick={focusInput2}> Focus 2 </button>
    </div>
  );
}

export default App;
