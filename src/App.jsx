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

export default function App() {
  return (
    <main>
      <h1>Todo List</h1>

      <div>
        <input type="text" placeholder="Enter a new todo" />
        <button type="button">Add Todo</button>
      </div>

      <ul>
        {initialTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              defaultChecked={todo.completed}
            />

            <span>{todo.title}</span>

            <button type="button">Edit</button>

            <button
              type="button"
              disabled={!todo.completed}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}