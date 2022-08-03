import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  
  const [ count, setCount ] = useState(1);

  const increaseCount = () => {
    if (count < 10){
      setCount(count + 1);
    } else {
      setCount(1);
    }
}

  return (
    <div className="App">
      <p>The current count is: {count}</p>
      <button onClick={increaseCount}>Increase count</button>
    </div>
  );
}

export default App;
