import React, { useState, useEffect } from 'react';
import { db } from './firebaseConfig';
import Todo from './todo';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        const unsubscribe = db.collection('todos').onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTodos(data);
        });

        return unsubscribe; // Cleanup function to prevent memory leaks
    }, []);

    const handleAddTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim()) {
            db.collection('todos').add({
                text: newTodo,
                completed: false,
            });
            setNewTodo('');
        }
    };

    const handleToggleCompleted = (id) => {
        db.collection('todos').doc(id).update({
            completed: !todos.find((todo) => todo.id === id).completed,
        });
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <form onSubmit={handleAddTodo}>
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type="submit">Add To-Do</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} toggleCompleted={handleToggleCompleted} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
