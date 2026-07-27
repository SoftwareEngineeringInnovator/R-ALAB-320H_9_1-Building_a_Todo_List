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
        <button type="button">Add Task</button>
      </div>

      <ul>
        <li>
          <input type="checkbox" />
          <span>Create Mockup</span>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </li>

        <li>
          <input type="checkbox" />
          <span>Create Static Layout</span>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </li>

        <li>
          <input type="checkbox" />
          <span>Add Interactivity</span>
          <button type="button">Edit</button>
          <button type="button">Delete</button>
        </li>
      </ul>
    </main>
  );
}