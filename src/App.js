import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(5);
 
  return (
    <div className="App">

      <p> You have pressed the button {count} times.</p>
      <button onClick = {() => setCount(count + 1)} > + </button>
      <button onClick = {() => setCount(count - 1)} > - </button>
      <button onClick = {() => setCount(0)} > Clear </button>
    </div>
  );
}

export default App;