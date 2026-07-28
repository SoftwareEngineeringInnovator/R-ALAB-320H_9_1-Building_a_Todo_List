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
      // Add the new todo to the top of the array
      return [action.todo, ...todos];

    case "toggle":
      // Change the completed value of the selected todo
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, completed: !todo.completed }
          : todo,
      );

    case "delete":
      // Remove the selected todo from the list
      return todos.filter((todo) => todo.id !== action.id);

    case "save":
      // Update the title of the selected todo
      return todos.map((todo) =>
        todo.id === action.id
          ? { ...todo, title: action.title }
          : todo,
      );

    default:
      return todos;
  }
}

export default function App() {
  const [todos, dispatch] = useReducer(todoReducer, initialTodos);

  // Stores the text typed into the new todo input
  const [newTodo, setNewTodo] = useState("");

  // Stores the ID of the todo being edited
  const [editingId, setEditingId] = useState(null);

  // Stores the updated title while editing
  const [editTitle, setEditTitle] = useState("");

  function handleSubmit(event) {
    // Prevent the form from refreshing the page
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

  function handleEdit(todo) {
    // Keep track of the todo being edited
    setEditingId(todo.id);

    // Place the current title inside the edit input
    setEditTitle(todo.title);
  }

  function handleSave(id) {
    // Do not save an empty todo title
    if (editTitle.trim() === "") {
      return;
    }

    dispatch({
      type: "save",
      id: id,
      title: editTitle.trim(),
    });

    // Exit editing mode
    setEditingId(null);
    setEditTitle("");
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
            <input type="checkbox" checked={todo.completed} onChange={() =>
                dispatch({
                  type: "toggle",
                  id: todo.id,
                })
              }
            />

            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(event) => setEditTitle(event.target.value)}/>

                <button
                  type="button"
                  onClick={() => handleSave(todo.id)}
                >Save</button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>

                <button type="button" onClick={() => handleEdit(todo)}>Edit</button>

                <button type="button" disabled={!todo.completed} onClick={() =>
                    dispatch({
                      type: "delete",
                      id: todo.id,
                    })
                  }
                >Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}