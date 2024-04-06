import React from 'react';

const Todo = ({ todo, toggleCompleted }) => {
    const handleToggle = () => {
        toggleCompleted(todo.id);
    };

    return (
        <li className={todo.completed ? 'completed' : ''}>
            <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
            {todo.text}
        </li>
    );
};

export default Todo