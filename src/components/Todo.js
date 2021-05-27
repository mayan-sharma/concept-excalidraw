import { useState } from "react";

export default function Todo() {
    
    const [todos, setTodos] = useState([
        {
            id: 0,
            task: 'Draw diagram'
        },
        {
            id: 1,
            task: 'Get Internship'
        }
    ]); 

    const [todoVal, setTodoVal] = useState('');
    
    const handleAddTask = () => {
        
        if (todoVal === '') return;
        
        const newTask = {
            id: Math.floor(Math.random() * 10000),
            task: `${todoVal}`
        }

        setTodos([...todos, newTask]);
    }

    const handleRemove = (id) => {
        setTodos(todos.filter((todo) => todo.id != id));
    }

    console.log(todos);

    return (
        <div className="todos-container">
            <div className="todos-input">
                <input onChange={(e) => setTodoVal(e.target.value)} type="text" name="task" />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="todos">
                { todos.map((todo) => (
                    <div key={todo.id} className="todo">
                        <div>{todo.task}</div>
                        <div onClick={() => handleRemove(todo.id)} className="remove">Remove</div>
                    </div>
                ))}
            </div>
        </div>
    );
}