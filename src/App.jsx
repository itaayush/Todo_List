import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: inputValue.trim(),
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Todo-List</h1>
        
        <form className="todo-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task..."
            className="todo-input"
          />
          <button type="submit" className="submit-btn">
            Add Task
          </button>
        </form>

        <div className="todo-list">
          {todos.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo) => (
              <div
                key={todo.id}
                className={`todo-item ${todo.completed ? "completed" : ""}`}
              >
                <span className="todo-text">{todo.text}</span>
                <div className="todo-actions">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className={`action-btn tick-btn ${todo.completed ? "ticked" : ""}`}
                    title={todo.completed ? "Mark as incomplete" : "Mark as complete"}
                  >
                    ✓
                  </button>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="action-btn delete-btn"
                    title="Delete task"
                  >
                    ✕
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
