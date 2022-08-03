import './App.css';
import ToDoList from './ToDoList';
import { useState } from 'react';

function App() {
  
  const initialData = [
    'Wash the dishes',
    'Clean the car',
    'Go Shopping'
  ]

  const [ darkMode, setDarkMode ] = useState(false);
  
  const [ todos, setTodos ] = useState(initialData);

   const addTodoFn = (e, currentTask) => {
    e.preventDefault();
     setTodos([ ...todos, currentTask ]);
   }

  return (
    <div className={`App ${darkMode && 'dark-mode'}`}>
      <button onClick={() => setDarkMode(!darkMode)}>Change To Dark Mode</button>
      {<ToDoList todos={todos} addTodo={addTodoFn} />}
    </div>
  )
}

export default App;
