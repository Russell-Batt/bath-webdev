import addTodoFn from './App';
import { useState } from 'react';

function ToDoList(props) {
    const { todos } = props;

    const [ task, setTask ] = useState('');

    return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={ () => addTodoFn(task) }>
                    <input 
                    placeholder="Task" 
                    name="task" 
                    id="task" 
                    value={task} 
                    onChange={(e) => setTask(e.target.value)} />
                    <button type="submit">Add Task</button>
                </form>
            </div>

            <ul>
                {
                    todos.map((todo,i) => {
                        return <li key={i}>{todo}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList;