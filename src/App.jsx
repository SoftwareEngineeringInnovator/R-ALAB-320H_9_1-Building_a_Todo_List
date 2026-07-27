import { useReducer, useState } from "react";

// Starter todo items
const initialTodos = [
  {
    id: 1,
    title: "Create Mockup",
    completed: true,
  },
  {
    id: 2,
    title: "Create Static Layout",
    completed: true,
  },
  {
    id: 3,
    title: "Add Interactivity",
    completed: false,
  },
];

// Function for the reducer
function todoReducer(todos, action) {
  switch (action.type) {

    case "add":
      // Add the new todo to the array
      return [action.todo, ...todos];

    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case "delete":
      // Remove the todo item from the list
      return todos.filter((todo) => todo.id !== action.id);

    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // Stores the state into the todo
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(event) {
    // Prevent the form from refreshing
    event.preventDefault();

    // Do not add an empty todo
    if (newTodo.trim() === "") {
      return;
    }

    dispatch({
      type: "add",
      todo: {
        id: Date.now(),
        title: newTodo.trim(),
        completed: false,
      },
    });

    // Clear the input after the todo is added
    setNewTodo("");
  }

  return (
    <main>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new todo"
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />

        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({
                  type: "toggle",
                  id: todo.id,
                })
              }
            />

            <span>{todo.title}</span>

            <button type="button">Edit</button>

            <button
              type="button"
              disabled={!todo.completed}
              onClick={() =>
                dispatch({
                  type: "delete",
                  id: todo.id,
                })
              }
            >Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}