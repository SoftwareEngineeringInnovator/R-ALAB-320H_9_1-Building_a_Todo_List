import { useReducer } from "react";

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
    case "toggle":
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  return (
    <main>
      <h1>Todo List</h1>

      <div>
        <input type="text" placeholder="Enter a new todo" />
        <button type="button">Add Todo</button>
      </div>

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

            <button type="button" disabled={!todo.completed}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}